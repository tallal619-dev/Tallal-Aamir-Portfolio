"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import type { CSSProperties } from "react";

const DEFAULT_INNER_GRADIENT = "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180,
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60
};

interface ProfileCardProps {
  avatarUrl?: string;
  behindGlowColor?: string;
  behindGlowEnabled?: boolean;
  behindGlowSize?: string;
  className?: string;
  contactText?: string;
  enableMobileTilt?: boolean;
  enableTilt?: boolean;
  grainUrl?: string;
  handle?: string;
  iconUrl?: string;
  innerGradient?: string;
  miniAvatarUrl?: string;
  mobileTiltSensitivity?: number;
  name?: string;
  onContactClick?: () => void;
  showUserInfo?: boolean;
  status?: string;
  title?: string;
}

type ProfileCardStyle = CSSProperties & Record<`--${string}`, string>;
type MotionEventWithPermission = typeof DeviceMotionEvent & {
  requestPermission?: () => Promise<PermissionState>;
};

const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);
const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));
const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

function getOffsets(event: PointerEvent, element: HTMLElement) {
  const rect = element.getBoundingClientRect();

  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

function ProfileCardComponent({
  avatarUrl = "/assets/profile/tallal-aamir.jpeg",
  behindGlowColor,
  behindGlowEnabled = true,
  behindGlowSize,
  className = "",
  contactText = "Contact",
  enableMobileTilt = false,
  enableTilt = true,
  grainUrl,
  handle = "tallal-aamir",
  iconUrl,
  innerGradient,
  miniAvatarUrl,
  mobileTiltSensitivity = 5,
  name = "Tallal Aamir",
  onContactClick,
  showUserInfo = true,
  status = "Available",
  title = "Senior Shopify Developer"
}: ProfileCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) {
      return null;
    }

    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;

      if (!shell || !wrap) {
        return;
      }

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`
      };

      Object.entries(properties).forEach(([key, value]) => wrap.style.setProperty(key, value));
    };

    const step = (timestamp: number) => {
      if (!running) {
        return;
      }

      if (lastTs === 0) {
        lastTs = timestamp;
      }

      const dt = (timestamp - lastTs) / 1000;
      const tau = timestamp < initialUntil ? 0.6 : 0.14;
      const k = 1 - Math.exp(-dt / tau);

      lastTs = timestamp;
      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;
      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;

        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) {
        return;
      }

      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      beginInitial(durationMs: number) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      cancel() {
        if (rafId) {
          cancelAnimationFrame(rafId);
        }

        rafId = null;
        running = false;
        lastTs = 0;
      },
      getCurrent() {
        return { tx: targetX, ty: targetY, x: currentX, y: currentY };
      },
      setImmediate(x: number, y: number) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;

        if (!shell) {
          return;
        }

        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      }
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const shell = shellRef.current;

      if (!shell || !tiltEngine) {
        return;
      }

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    (event: PointerEvent) => {
      const shell = shellRef.current;

      if (!shell || !tiltEngine) {
        return;
      }

      wrapRef.current?.classList.add("active");
      shell.classList.add("active", "entering");

      if (enterTimerRef.current) {
        window.clearTimeout(enterTimerRef.current);
      }

      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove("entering");
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;

    if (!shell || !tiltEngine) {
      return;
    }

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { tx, ty, x, y } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;

      if (settled) {
        shell.classList.remove("active");
        wrapRef.current?.classList.remove("active");
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };

    if (leaveRafRef.current) {
      cancelAnimationFrame(leaveRafRef.current);
    }

    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      const shell = shellRef.current;

      if (!shell || !tiltEngine) {
        return;
      }

      const { beta, gamma } = event;

      if (beta == null || gamma == null) {
        return;
      }

      const centerX = shell.clientWidth / 2;
      const centerY = shell.clientHeight / 2;
      const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
      const y = clamp(centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity, 0, shell.clientHeight);

      tiltEngine.setTarget(x, y);
    },
    [mobileTiltSensitivity, tiltEngine]
  );

  useEffect(() => {
    const disableMobileHover = window.matchMedia("(hover: none), (pointer: coarse), (max-width: 768px)").matches;

    if (disableMobileHover) {
      tiltEngine?.cancel();
      shellRef.current?.classList.remove("active", "entering");
      wrapRef.current?.classList.remove("active");

      return undefined;
    }

    if (!enableTilt || !tiltEngine) {
      return undefined;
    }

    const shell = shellRef.current;
    const wrap = wrapRef.current;

    if (!shell) {
      return undefined;
    }

    const handleClick = () => {
      if (!enableMobileTilt || window.location.protocol !== "https:") {
        return;
      }

      const motionEvent = window.DeviceMotionEvent as MotionEventWithPermission | undefined;

      if (motionEvent?.requestPermission) {
        motionEvent
          .requestPermission()
          .then((state) => {
            if (state === "granted") {
              window.addEventListener("deviceorientation", handleDeviceOrientation);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }
    };

    shell.addEventListener("pointerenter", handlePointerEnter);
    shell.addEventListener("pointermove", handlePointerMove);
    shell.addEventListener("pointerleave", handlePointerLeave);
    shell.addEventListener("click", handleClick);

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener("pointerenter", handlePointerEnter);
      shell.removeEventListener("pointermove", handlePointerMove);
      shell.removeEventListener("pointerleave", handlePointerLeave);
      shell.removeEventListener("click", handleClick);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);

      if (enterTimerRef.current) {
        window.clearTimeout(enterTimerRef.current);
      }

      if (leaveRafRef.current) {
        cancelAnimationFrame(leaveRafRef.current);
      }

      tiltEngine.cancel();
      shell.classList.remove("active", "entering");
      wrap?.classList.remove("active");
    };
  }, [enableMobileTilt, enableTilt, handleDeviceOrientation, handlePointerEnter, handlePointerLeave, handlePointerMove, tiltEngine]);

  const cardStyle = useMemo<ProfileCardStyle>(
    () => ({
      "--behind-glow-color": behindGlowColor ?? "rgba(var(--accent-rgb), 0.62)",
      "--behind-glow-size": behindGlowSize ?? "25%",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT
    }),
    [behindGlowColor, behindGlowSize, grainUrl, iconUrl, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      {behindGlowEnabled ? <div className="pc-behind" aria-hidden="true" /> : null}
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card" aria-label={`${name} profile card`}>
          <div className="pc-inside">
            <div className="pc-shine" aria-hidden="true" />
            <div className="pc-glare" aria-hidden="true" />
            <div className="pc-content pc-avatar-content">
              <Image
                className="avatar avatar-base"
                src={avatarUrl}
                alt={`${name} portrait`}
                width={900}
                height={1254}
                priority
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <Image
                aria-hidden="true"
                className="avatar avatar-color"
                src={avatarUrl}
                alt=""
                width={900}
                height={1254}
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              {showUserInfo ? (
                <div className="pc-user-info">
                  <div className="pc-user-details">
                    <div className="pc-mini-avatar">
                      <Image
                        src={miniAvatarUrl || avatarUrl}
                        alt={`${name} mini portrait`}
                        width={96}
                        height={96}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.opacity = "0.5";
                          event.currentTarget.src = avatarUrl;
                        }}
                      />
                    </div>
                    <div className="pc-user-text">
                      <div className="pc-handle">@{handle}</div>
                      <div className="pc-status">{status}</div>
                    </div>
                  </div>
                  <button className="pc-contact-btn" onClick={handleContactClick} type="button" aria-label={`Contact ${name}`}>
                    {contactText}
                  </button>
                </div>
              ) : null}
            </div>
            <div className="pc-content">
              <div className="pc-details">
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
