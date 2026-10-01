// Hand-drawn SVG interface recreations. All records, products and amounts are
// illustrative, not client screenshots or evidence of business performance.
// Run: node scripts/generate-case-previews.mjs
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../public/assets/case-studies/interfaces/', import.meta.url));
mkdirSync(output, { recursive: true });
const ink = '#27313b', muted = '#76808b', rule = '#e5e8eb';
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const rect = (x, y, w, h, fill = '#fff', r = 0, stroke = 'none') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const text = (x, y, s, size = 16, fill = ink, weight = 400, extra = '') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" ${extra}>${esc(s)}</text>`;
const line = (x, y, x2, y2, color = rule, width = 1) => `<path d="M${x} ${y}L${x2} ${y2}" stroke="${color}" stroke-width="${width}" fill="none"/>`;
const circle = (x, y, r, fill, stroke = 'none') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}"/>`;
const pill = (x, y, label, bg = '#eaf3ee', fg = '#41745b', w = 96) => rect(x, y, w, 28, bg, 14) + text(x + 12, y + 19, label, 12, fg, 600);
const button = (x, y, w, label, color = '#344f79') => rect(x, y, w, 42, color, 5) + text(x + w / 2, y + 27, label, 14, '#fff', 600, 'text-anchor="middle"');
const field = (x, y, w, label, value) => text(x, y, label, 13, muted) + rect(x, y + 12, w, 42, '#fff', 4, '#d9dce0') + text(x + 13, y + 39, value, 15);
const avatar = (x, y, initials, color = '#e5dcef') => circle(x, y, 17, color) + text(x, y + 4, initials, 11, '#594e69', 600, 'text-anchor="middle"');
function save(name, title, body, bg = '#f5f6f8') {
  writeFileSync(`${output}${name}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="640" viewBox="0 0 960 640" role="img"><title>${esc(title)}</title><desc>Interface recreation with illustrative content and sample data.</desc><rect width="960" height="640" fill="${bg}"/><g font-family="Arial, Helvetica, sans-serif">${body}</g></svg>\n`);
}
function storeHeader(name, color = ink) {
  return rect(0, 0, 960, 66) + text(32, 41, name, 24, color, 600, 'font-family="Georgia, serif"') + text(532, 39, 'Collection', 13, muted) + text(637, 39, 'Our story', 13, muted) + text(738, 39, 'Search', 13, muted) + text(838, 39, 'Bag (2)', 13, color) + line(0, 66, 960, 66);
}
function shell(name, section, nav, accent = '#536da0') {
  let s = rect(0, 0, 960, 640, '#f7f8fa') + rect(0, 0, 174, 640, '#fff') + line(174, 0, 174, 640);
  s += rect(23, 27, 28, 28, accent, 7) + text(37, 47, name[0], 18, '#fff', 700, 'text-anchor="middle"') + text(62, 47, name, 18, ink, 600);
  s += text(24, 102, 'WORKSPACE', 10, muted, 600, 'letter-spacing="1.5"');
  nav.forEach((label, i) => { const y = 120 + i * 47; s += (i === 0 ? rect(12, y, 150, 38, '#edf1f7', 6) : '') + rect(25, y + 12, 12, 12, 'none', 3, i === 0 ? accent : '#a2a9b1') + text(48, y + 25, label, 13, i === 0 ? accent : muted, i === 0 ? 600 : 400); });
  s += line(20, 563, 153, 563) + avatar(35, 597, 'TA') + text(61, 593, 'Workspace admin', 11, ink, 600) + text(61, 611, 'Sample workspace', 10, muted);
  return s + rect(175, 0, 785, 72) + text(205, 43, section, 15, muted) + pill(790, 24, 'Demo data', '#f1f3f5', muted, 100) + line(175, 72, 960, 72);
}
function product(kind, x, y, scale = 1, color = '#9f7364') {
  let shape = '';
  if (kind === 'bottle') shape = rect(30, 0, 34, 28, '#d1bba5', 4) + rect(14, 25, 66, 112, color, 12) + rect(19, 68, 56, 45, '#f7f1e8', 1) + text(47, 87, 'DAILY', 9, '#6e655e', 600, 'text-anchor="middle"') + text(47, 102, 'ESSENTIALS', 6, '#6e655e', 400, 'text-anchor="middle"');
  if (kind === 'shirt') shape = `<path d="M25 10L0 30 17 61 35 51 31 142H116L112 51 130 61 147 30 122 10 99 0Q75 24 51 0Z" fill="${color}"/><path d="M51 0Q75 35 99 0M37 47L40 135M110 47L108 135" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>`;
  if (kind === 'dress') shape = `<path d="M61 0L47 0 41 46Q31 66 47 109L0 289Q73 314 148 289L99 109Q117 64 103 46L98 0H84L82 42Q73 53 64 42Z" fill="${color}"/><path d="M48 109Q75 120 99 109M59 128L32 284M88 129L118 284M74 129V293" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="2"/>`;
  if (kind === 'ring') shape = `<ellipse cx="100" cy="100" rx="71" ry="93" fill="none" stroke="#b69452" stroke-width="14"/><ellipse cx="98" cy="99" rx="66" ry="89" fill="none" stroke="#e1cd94" stroke-width="5"/><path d="M70 13L86 0H112L130 13 100 48Z" fill="#fafafa" stroke="#b1b8b8" stroke-width="2"/><path d="M70 13H130M86 0L88 13 100 48 112 13 112 0" fill="none" stroke="#c0c8ca"/>`;
  if (kind === 'car') shape = `<path d="M16 68L52 57 88 20Q145 10 198 23L236 58 268 70 273 110H8L7 89Z" fill="${color}"/><path d="M67 57L99 29H142V57ZM151 29L191 31 220 57H151Z" fill="#c6d3db"/><path d="M20 78H45M244 78H264" stroke="#faf8e6" stroke-width="7"/><path d="M17 110H267" stroke="#6a737c" stroke-width="6"/>${circle(63, 108, 25, '#343b43')}${circle(63, 108, 12, '#cbd0d4')}${circle(222, 108, 25, '#343b43')}${circle(222, 108, 12, '#cbd0d4')}`;
  return `<g transform="translate(${x} ${y}) scale(${scale})">${shape}</g>`;
}

// Jewelry: the actual option flow is the subject, not decorative technology art.
let s = storeHeader('Personal collection', '#635747');
s += text(36, 104, 'Collection  /  Rings  /  Personalise', 12, muted);
s += rect(30, 130, 448, 426, '#eee9e2', 2) + circle(253, 341, 151, '#e8e1d7') + product('ring', 153, 215, 1, '#b69866');
s += text(254, 525, 'Made personal. Made to keep.', 17, '#897b6b', 400, 'font-family="Georgia, serif" text-anchor="middle"');
s += text(514, 156, 'THE PERSONAL COLLECTION', 11, '#968270', 600, 'letter-spacing="2"') + text(514, 197, 'A ring, uniquely yours.', 31, '#443d36', 400, 'font-family="Georgia, serif"') + text(514, 230, 'Choose your finish and add a personal detail.', 14, muted);
s += text(514, 273, '01   Choose your material', 14, ink, 600);
['#c5a368', '#c1c5ca', '#ca9c86'].forEach((c, i) => { s += circle(531 + i * 49, 305, 15, c) + (i === 0 ? circle(531, 305, 20, 'none', '#7d6c51') : ''); });
s += text(685, 310, 'Yellow gold', 14, '#776b59') + field(514, 361, 174, '02   Ring size', 'Size 7     ⌄') + field(706, 361, 216, '03   Engraving', 'Always, together');
s += text(514, 442, 'Your engraving appears inside the band.', 12, muted) + line(514, 462, 922, 462) + text(514, 493, 'Your selection', 13, muted) + text(922, 493, '$240.00', 20, ink, 600, 'text-anchor="end"') + button(514, 517, 408, 'Add personalised ring to bag', '#6f6557');
save('jewelry', 'Jewelry configurator — material, sizing and engraving', s, '#fff');

// Rental: editorial product page and a visible four-day booking state.
s = storeHeader('Dressed for dinner', '#785a58') + text(34, 104, 'Occasionwear  /  The evening edit', 12, muted);
s += rect(30, 126, 438, 478, '#efe7e4', 2) + rect(61, 149, 375, 433, '#e7dcd8', 180) + product('dress', 158, 184, 1.15, '#875555') + text(56, 576, 'THE EVENING EDIT', 11, '#795e5a', 600, 'letter-spacing="2"');
s += text(507, 158, 'An evening worth dressing for.', 29, '#5b4242', 400, 'font-family="Georgia, serif"') + text(507, 190, 'The satin evening dress', 16, muted) + text(507, 235, '£65', 29, '#5b4242', 500) + text(575, 233, '/ 4-day rental', 14, muted);
s += text(507, 274, 'Choose your size', 13, ink, 600);
['6', '8', '10', '12', '14'].forEach((v, i) => { s += rect(507 + i * 65, 290, 53, 37, i === 2 ? '#805f5c' : '#fff', 3, '#ded7d4') + text(533 + i * 65, 315, v, 14, i === 2 ? '#fff' : ink, 400, 'text-anchor="middle"'); });
s += field(507, 361, 194, 'Delivery date', 'Thu, 18 June') + field(718, 361, 208, 'Return date', 'Mon, 22 June');
s += rect(507, 443, 419, 61, '#f6f0ed', 4) + text(524, 468, 'A little time to try it on.', 14, '#785a58', 600) + text(524, 489, 'Choose delivery before your event.', 12, muted) + button(507, 528, 419, 'Reserve your dates', '#805f5c') + text(507, 599, 'Rental booking · Product options · Collection discovery', 12, muted);
save('rental', 'Dress rental — product selection and booking dates', s, '#fffdfb');

// Store editor: meaningful sections and a storefront preview.
s = rect(0, 0, 960, 59, '#fff') + text(24, 36, 'Theme workspace', 18, ink, 600) + pill(205, 17, 'Draft', '#f1efe9', '#837958', 64) + text(622, 35, 'Home page', 13, muted) + button(832, 10, 105, 'Save', '#516958');
s += rect(0, 60, 237, 580, '#fff') + line(237, 60, 237, 640) + text(22, 99, 'SECTIONS', 11, muted, 600, 'letter-spacing="1.5"');
['Header', 'Image with text', 'Featured collection', 'Product highlights', 'Frequently asked', 'Footer'].forEach((name, i) => { s += rect(12, 119 + i * 53, 212, 44, i === 1 ? '#eaf0eb' : '#fff', 5) + text(24, 146 + i * 53, '⋮⋮', 15, muted) + text(48, 146 + i * 53, name, 13, i === 1 ? '#42664a' : ink); });
s += text(24, 495, '+ Add section', 14, '#42664a', 600) + line(20, 520, 213, 520) + text(24, 551, 'Dynamic source', 13, ink, 600) + text(24, 578, 'Product → care instructions', 12, muted) + text(24, 605, 'Connected to a metafield', 11, '#527b5a');
s += rect(266, 87, 664, 517, '#fff', 3, '#e0e2df') + text(289, 122, 'FORM & FIELD', 17, '#454a3f', 500, 'font-family="Georgia, serif"') + text(714, 122, 'Shop    About    Bag', 12, muted) + line(267, 139, 930, 139);
s += rect(283, 155, 629, 228, '#e9eadd') + text(310, 208, 'Objects for', 34, '#4e5849', 400, 'font-family="Georgia, serif"') + text(310, 247, 'everyday living.', 34, '#4e5849', 400, 'font-family="Georgia, serif"') + text(310, 280, 'Considered details. Useful things.', 12, muted) + button(310, 309, 166, 'Explore collection', '#586951') + product('bottle', 733, 189, 1.2, '#a8ae8d');
s += text(288, 420, 'Everyday essentials', 21, '#454a3f', 400, 'font-family="Georgia, serif"');
['The daily edit', 'Thoughtful materials', 'Made to be used'].forEach((v, i) => { s += rect(286 + i * 211, 441, 199, 106, ['#efebe4', '#e5e9e4', '#eee5df'][i], 2) + product('bottle', 349 + i * 211, 450, .63, ['#b59a80', '#879987', '#b18c79'][i]) + text(286 + i * 211, 573, v, 12, ink); });
save('theme', 'Shopify theme — reusable sections and connected content', s);

// Cart and product discovery share a calm, credible sample retail identity.
s = storeHeader('Daily essentials', '#6c5748') + text(30, 107, 'Build your everyday ritual', 29, '#5c4b40', 400, 'font-family="Georgia, serif"') + text(30, 137, 'A considered routine, one essential at a time.', 14, muted);
['Cleanse', 'Nourish', 'Protect'].forEach((v, i) => { const x = 30 + (i % 2) * 250, y = i < 2 ? 168 : 395; s += rect(x, y, 229, 166, ['#eee4d8', '#e5e8df', '#eee2db'][i], 5) + product('bottle', x + 78, y + 20, .9, ['#af8c6f', '#8d9a80', '#c99e8a'][i]) + text(x, y + 191, v, 16, ink, 600) + text(x + 228, y + 191, ['$24', '$32', '$28'][i], 15, muted, 400, 'text-anchor="end"'); });
s += rect(275, 396, 229, 165, '#f6f0e8', 5) + text(295, 428, 'Better together', 20, '#6c5748', 400, 'font-family="Georgia, serif"') + text(295, 458, 'Build a three-piece routine', 13, muted) + text(295, 480, 'and save 10% as a bundle.', 13, muted) + text(295, 535, 'Complete your ritual →', 13, '#91694d', 600);
s += rect(539, 66, 421, 574, '#fff') + line(539, 66, 539, 640) + text(565, 111, 'Your bag', 25, '#5c4b40', 400, 'font-family="Georgia, serif"') + text(916, 108, '2 items', 13, muted, 400, 'text-anchor="end"') + line(565, 133, 932, 133);
['Gentle cleanser', 'Daily moisturiser'].forEach((v, i) => { const y = 154 + i * 123; s += rect(565, y, 77, 91, '#f3eee7', 3) + product('bottle', 580, y + 9, .5, i ? '#8d9a80' : '#af8c6f') + text(660, y + 21, v, 15, ink, 600) + text(660, y + 45, '100 ml · Daily collection', 12, muted) + rect(660, y + 61, 82, 28, '#fff', 3, '#e0ddd8') + text(672, y + 80, '−    1    +', 14, ink) + text(919, y + 78, i ? '$32.00' : '$24.00', 15, ink, 500, 'text-anchor="end"'); });
s += rect(565, 405, 366, 58, '#f3eee7', 5) + text(580, 429, 'Complete the routine', 14, '#795c46', 600) + text(580, 449, 'Add daily SPF for a three-piece bundle.', 12, muted) + line(565, 485, 931, 485) + text(565, 516, 'Subtotal', 16, ink) + text(930, 516, '$56.00', 22, ink, 600, 'text-anchor="end"') + button(565, 543, 366, 'Continue to checkout', '#8c6b53') + text(565, 616, 'Shipping calculated at checkout', 12, muted);
save('cart', 'AJAX cart — quantities, bundles and complementary products', s, '#faf8f5');

s = storeHeader('Everyday / Studio', '#3f5c57') + text(31, 116, 'The everyday collection', 32, '#344d48', 400, 'font-family="Georgia, serif"') + text(31, 149, 'Well-made staples. A little less searching.', 14, muted) + text(770, 144, 'Sort: Featured  ⌄', 13, muted) + line(30, 172, 930, 172);
s += text(31, 211, 'Filter by', 16, ink, 600) + text(31, 260, 'Category', 13, ink, 600);
['T-shirts', 'Shirts', 'Knitwear'].forEach((v, i) => { s += rect(31, 282 + i * 36, 16, 16, i === 0 ? '#4d7169' : '#fff', 2, '#bfcac5') + (i === 0 ? text(33, 295, '✓', 13, '#fff') : '') + text(59, 295 + i * 36, v, 13, muted); });
s += line(31, 405, 201, 405) + text(31, 440, 'Colour', 13, ink, 600);
['#e4dac9', '#64786f', '#768b9e', '#353d44'].forEach((c, i) => { s += circle(44 + i * 44, 472, 13, c); });
s += text(31, 533, 'Size', 13, ink, 600) + text(31, 569, 'XS    S    M    L    XL', 14, muted);
s += pill(240, 192, 'T-shirts  ×', '#eaf0eb', '#4d7169', 100) + text(935, 212, 'Showing 3 products', 12, muted, 400, 'text-anchor="end"');
['The cotton tee', 'The relaxed tee', 'The everyday tee'].forEach((v, i) => { const x = 240 + i * 236; s += rect(x, 239, 222, 284, ['#eeebe5', '#e6ece8', '#e7ebee'][i], 3) + product('shirt', x + 38, 301, 1, ['#c0ac8f', '#7b9080', '#8a9ba8'][i]) + text(x, 553, v, 15, ink, 600) + text(x, 578, ['Organic cotton · Sand', 'Soft jersey · Sage', 'Cotton blend · Slate'][i], 12, muted) + text(x, 607, ['$38.00', '$42.00', '$36.00'][i], 15, ink); });
save('filtering', 'Collection discovery — attributes, filters and product results', s, '#fff');

// Collaboration board: actual card titles, assignees, labels and task states.
s = shell('Workspace', 'Product team  /  Website release', ['Boards', 'Inbox', 'Messages', 'Members', 'Settings'], '#83709d');
s += text(202, 122, 'Website release', 28, ink, 600) + text(202, 150, 'One shared board, from first brief to final review.', 13, muted) + avatar(825, 123, 'AL') + avatar(853, 123, 'MK', '#dce8e3') + avatar(881, 123, 'TA', '#e6dfd5');
s += text(204, 195, 'Board', 14, '#776089', 600) + text(278, 195, 'Activity', 14, muted) + text(361, 195, 'Files', 14, muted) + line(201, 211, 926, 211) + line(202, 211, 246, 211, '#83709d', 3);
const tasks = [['Prepare product content', 'Map the checkout flow', 'Review mobile navigation'], ['Build collection filters', 'Connect cart updates'], ['Approve page layouts', 'Define product options']];
['To do', 'In progress', 'Ready for review'].forEach((v, i) => { const x = 201 + i * 246; s += rect(x, 233, 230, 378, ['#f0eff3', '#edf0f5', '#edf2ef'][i], 8) + circle(x + 17, 258, 4, ['#aa9eba', '#839abd', '#87a994'][i]) + text(x + 29, 263, v, 14, ink, 600) + text(x + 208, 263, String(tasks[i].length), 12, muted, 400, 'text-anchor="end"');
  tasks[i].forEach((task, j) => { const y = 284 + j * 97; s += rect(x + 9, y, 212, 85, '#fff', 5, '#e5e5eb') + pill(x + 20, y + 10, j % 2 ? 'Engineering' : 'Product', j % 2 ? '#e9eff8' : '#f0eafa', j % 2 ? '#617b9c' : '#8a729e', j % 2 ? 95 : 70) + text(x + 20, y + 51, task, 12, ink, 500) + text(x + 20, y + 73, 'Jun ' + (18 + j), 10, muted) + circle(x + 194, y + 67, 10, '#e6dfd5') + text(x + 194, y + 70, 'TA', 7, '#78664f', 600, 'text-anchor="middle"'); });
});
save('kanban', 'Collaboration platform — board, task cards and shared workflow', s);

// Auction inventory and bid panel.
s = shell('CarZone', 'Marketplace  /  Auction room', ['Auctions', 'My bids', 'Inventory', 'Members', 'Settings'], '#576d90');
s += text(204, 120, 'The auction room', 28, ink, 600) + text(204, 150, 'Browse vehicles and follow your active bids.', 13, muted);
s += rect(201, 175, 441, 276, '#e8edf1', 7) + text(223, 207, 'LOT 024', 11, '#6f8192', 600, 'letter-spacing="1"') + product('car', 248, 247, 1.25, '#8d9da7') + text(221, 428, '2021 Sedan · Automatic · 42,000 km', 13, '#566978');
s += rect(660, 175, 271, 370, '#fff', 7, rule) + pill(680, 194, 'Bidding open', '#eaf2ed', '#537b60', 111) + text(680, 263, 'Current bid', 13, muted) + text(680, 303, '$18,500', 36, ink, 600) + text(680, 335, 'Next bid: $18,750', 13, muted) + button(680, 360, 231, 'Place a bid', '#576d90') + line(680, 423, 911, 423) + text(680, 451, 'Recent activity', 13, ink, 600) + text(680, 483, 'Bidder 014', 12, muted) + text(910, 483, '$18,500', 13, ink, 500, 'text-anchor="end"') + text(680, 513, 'Bidder 008', 12, muted) + text(910, 513, '$18,250', 13, ink, 500, 'text-anchor="end"');
s += text(202, 488, 'Vehicle details', 18, ink, 600) + line(202, 506, 642, 506);
[['Transmission', 'Automatic'], ['Fuel type', 'Petrol'], ['Registration', '2021']].forEach(([k,v], i) => { s += text(203 + i * 150, 534, k, 12, muted) + text(203 + i * 150, 559, v, 15, ink, 500); });
s += text(203, 609, 'Sample auction · Amounts shown for interface illustration', 11, muted);
save('auction', 'CarZone — vehicle details, bidding and auction activity', s);

function pos(desktop) {
  let a = rect(0, 0, 960, 66, '#fff') + text(26, 42, desktop ? 'Counter / Desktop' : 'Counter / Point of sale', 23, '#454c45', 600) + pill(729, 20, desktop ? 'Local workspace' : 'Register 01', '#edf1e9', '#5c7154', 144) + line(0, 66, 960, 66);
  a += rect(24, 90, 546, 43, '#fff', 6, rule) + text(41, 117, 'Search products or scan a barcode', 14, muted) + text(24, 175, 'All products', 14, '#556d4d', 600) + text(155, 175, 'Skincare', 14, muted) + text(260, 175, 'Body care', 14, muted) + text(377, 175, 'Accessories', 14, muted);
  ['Daily cleanser', 'Face moisturiser', 'Hand cream', 'Body wash', 'Nourishing oil', 'Travel set'].forEach((v,i) => { const x = 24 + i % 3 * 188, y = 198 + Math.floor(i/3)*204; a += rect(x, y, 173, 184, '#fff', 6, rule) + rect(x+8, y+8, 157, 116, ['#eee8df','#e6eadf','#eee2d9'][i%3], 4) + product('bottle', x+60, y+19, .72, ['#aa8f77','#929e7d','#bd9a82'][i%3]) + text(x+12, y+149, v, 13, ink, 600) + text(x+12, y+172, ['$24.00','$32.00','$18.00','$26.00','$38.00','$42.00'][i], 13, muted); });
  a += rect(598, 66, 362, 574, '#fff') + line(598, 66, 598, 640) + text(621, 108, desktop ? 'Invoice #0048' : 'Current sale', 23, ink, 600) + text(622, 138, desktop ? 'Saved to this device' : 'Walk-in customer', 13, muted) + line(621, 157, 934, 157);
  ['Daily cleanser', 'Face moisturiser', 'Hand cream'].forEach((v,i) => { a += text(622, 191+i*66, v, 14, ink, 500) + text(622, 213+i*66, '1 × '+['$24.00','$32.00','$18.00'][i], 12, muted) + text(932, 198+i*66, ['$24.00','$32.00','$18.00'][i], 15, ink, 500, 'text-anchor="end"'); });
  a += line(621, 375, 934, 375) + text(622, 405, 'Subtotal', 13, muted) + text(932, 405, '$74.00', 14, ink, 500, 'text-anchor="end"') + text(622, 439, 'Discount', 13, muted) + text(932, 439, '$0.00', 14, ink, 500, 'text-anchor="end"') + line(621, 460, 934, 460) + text(622, 497, 'Total', 21, ink, 600) + text(932, 497, '$74.00', 28, ink, 600, 'text-anchor="end"') + button(622, 526, 312, desktop ? 'Save & print receipt' : 'Complete sale', '#607557') + text(622, 605, desktop ? 'Local records · Receipt workflow' : 'Product lookup · Cart · Billing', 12, muted);
  return a;
}
save('pos', 'Retail POS — product lookup, cart and checkout', pos(false), '#f7f8f4');
save('desktop', 'Desktop POS — local sales and receipt workflow', pos(true), '#f7f8f4');

// Record systems use distinct domain-specific rows instead of generic skeletons.
const tables = [
  { file:'inventory', name:'Stockroom', title:'Inventory overview', sub:'Track products, locations and everyday stock movement.', nav:['Inventory','Movements','Locations','Categories','Settings'], action:'Check in stock', cols:['Product / SKU','Location','Available','Status'], rows:[['Cotton tote / CT-014','Main store','128','In stock'],['Ceramic mug / CM-021','Warehouse','46','In stock'],['Linen apron / LA-008','Main store','8','Low stock'],['Glass bottle / GB-016','Warehouse','72','In stock'],['Desk notebook / DN-012','Main store','24','In stock']], stats:[['Products','248'],['Stock locations','3'],['Below threshold','12']], accent:'#527a91' },
  { file:'students', name:'Data bank', title:'Student directory', sub:'Search profiles, training programmes and enrolment records.', nav:['Students','Programmes','Records','Reports','Settings'], action:'Add student', cols:['Student / ID','Programme','Batch','Status'], rows:[['Amina S. / ST-104','Web development','2026-A','Active'],['Hamza R. / ST-105','Python fundamentals','2026-A','Active'],['Sara K. / ST-106','Web development','2026-B','Active'],['Bilal A. / ST-107','Data analysis','2026-A','Completed'],['Noor M. / ST-108','Python fundamentals','2026-B','Active']], stats:[['Student records','186'],['Programmes','6'],['Active batches','4']], accent:'#5b79a2' },
  { file:'employees', name:'People', title:'Your team, in one place.', sub:'Manage staff profiles, departments and workspace access.', nav:['Employees','Departments','Attendance','Reports','Settings'], action:'Add employee', cols:['Employee / ID','Department','Role','Status'], rows:[['Amina S. / EMP-014','Engineering','Member','Active'],['Hamza R. / EMP-015','Operations','Manager','Active'],['Sara K. / EMP-016','Design','Member','Active'],['Bilal A. / EMP-017','Finance','Manager','On leave'],['Noor M. / EMP-018','Engineering','Member','Active']], stats:[['Team members','42'],['Departments','5'],['Present today','38']], accent:'#8a739c' },
  { file:'school', name:'School office', title:'Student records', sub:'Everyday administration, organised around your students.', nav:['Students','Classes','Records','Administration','Settings'], action:'New record', cols:['Student / Roll no.','Class','Section','Status'], rows:[['Amina S. / 101','Grade 8','A','Enrolled'],['Hamza R. / 102','Grade 8','B','Enrolled'],['Sara K. / 103','Grade 9','A','Enrolled'],['Bilal A. / 104','Grade 9','B','Enrolled'],['Noor M. / 105','Grade 10','A','Enrolled']], stats:[['Student records','324'],['Classes','12'],['Sections','24']], accent:'#698573' },
];
for (const config of tables) {
  s = shell(config.name, `Administration  /  ${config.nav[0]}`, config.nav, config.accent) + text(202, 119, config.title, 27, ink, 600) + text(202, 149, config.sub, 13, muted);
  config.stats.forEach(([label,value],i) => { const x=201+i*247; s += rect(x, 173, 231, 89, '#fff', 6, rule) + text(x+17, 200, label, 12, muted) + text(x+17, 240, value, 29, config.accent, 600); });
  s += rect(201, 285, 364, 40, '#fff', 5, rule) + text(215, 311, 'Search by name or identifier…', 13, muted) + button(753, 285, 180, config.action, config.accent);
  s += rect(201, 347, 731, 259, '#fff', 5, rule) + rect(202, 348, 729, 37, '#f1f3f6', 4);
  const xs=[218, 468, 666, 800]; config.cols.forEach((label,i)=>{s+=text(xs[i],372,label,11,muted,600);});
  config.rows.forEach((row,i)=>{const y=411+i*43;row.forEach((v,j)=>{s+= j===3 ? pill(xs[j],y-18,v,v==='Low stock'||v==='On leave'?'#faf0de':'#edf3ee',v==='Low stock'||v==='On leave'?'#a1874b':'#688272',104) : text(xs[j],y,v,j===0?12:11,j===0?ink:muted,j===0?500:400);}); if(i<4)s+=line(213,y+15,920,y+15);});
  s += text(202, 629, 'Illustrative records · Searchable data · Role-aware administration', 10, muted);
  save(config.file, `${config.title} — sample administration interface`, s);
}

// Tracking UI: a deliberately simplified schematic map with no map provider data.
s = shell('Fleet view', 'Workspace  /  Vehicle tracking', ['Vehicles','Activity','Locations','Settings'], '#527f7c') + text(202, 120, 'Vehicle overview', 27, ink, 600) + text(202, 150, 'A shared view across web and mobile.', 13, muted);
s += rect(201, 175, 730, 432, '#e9ede8', 7);
s += `<path d="M202 240L930 501M300 175L508 607M770 175L585 607M201 495L931 255M201 561L931 563" fill="none" stroke="#fff" stroke-width="19"/><path d="M201 318Q461 178 711 361T931 420" fill="none" stroke="#ccddd9" stroke-width="45"/><path d="M202 240L930 501M300 175L508 607M770 175L585 607M201 495L931 255M201 561L931 563" fill="none" stroke="#d8ded8" stroke-width="1"/><path d="M353 338L480 383 610 444 714 391" fill="none" stroke="#608a86" stroke-width="5" stroke-linecap="round"/>`;
s += text(269, 220, 'NORTH DISTRICT', 11, '#a1aaa0', 500, 'letter-spacing="2"') + text(568, 541, 'CENTRAL DISTRICT', 11, '#a1aaa0', 500, 'letter-spacing="2"') + circle(353,338,10,'#608a86','#fff') + circle(714,391,12,'#608a86','#fff') + rect(628,330,155,36,'#fff',5) + text(641,353,'Vehicle 03 · Moving',12,'#527f7c',600);
s += rect(221, 422, 268, 165, '#fff', 7, '#dde4df') + text(239, 452, 'Vehicle 03', 19, ink, 600) + pill(387,432,'Active','#edf3ee','#638271',83) + text(239, 482, 'Last update', 12, muted) + text(468, 482, 'Just now', 12, ink, 500, 'text-anchor="end"') + line(239,496,471,496) + text(239,522,'Location',12,muted) + text(468,522,'Central district',12,ink,500,'text-anchor="end"') + text(239,558,'View vehicle details →',12,'#527f7c',600);
s += text(705, 627, 'Schematic map · Sample locations', 10, muted);
save('tracking', 'Vehicle tracking — shared map and vehicle details', s);

// Mobile records: two legible app screens on a quiet paper background.
s = text(48, 70, 'Records, wherever you are.', 31, '#725949', 400, 'font-family="Georgia, serif"');
s += text(48, 100, 'A mobile workspace for profiles and everyday record keeping.', 15, '#9a8a7f');
function phone(x, title, content) { return rect(x,137,330,462,'#fff',27,'#ded7cf')+text(x+24,166,'9:41',11,ink,600)+rect(x+139,148,52,10,'#e4dfd9',5)+text(x+24,210,title,24,'#695649',600)+content+line(x+17,550,x+313,550)+text(x+38,577,'Records',12,'#936f54',600)+text(x+142,577,'Activity',12,muted)+text(x+237,577,'Profile',12,muted); }
s += phone(105,'Your records',rect(123,231,294,37,'#f7f4f0',5)+text(136,255,'Search profiles…',13,muted)+['Profile 001','Profile 002','Profile 003'].map((v,i)=>rect(123,286+i*82,294,68,'#fff',5,'#eee9e3')+avatar(155,320+i*82,['01','02','03'][i],'#eadfd1')+text(183,313+i*82,v,15,ink,600)+text(183,337+i*82,'Record updated · Jun '+(18-i),11,muted)+text(391,326+i*82,'›',23,'#bba896')).join(''));
s += phone(525,'Profile 001',pill(550,228,'Active record','#f2eadd','#987f5e',121)+text(549,294,'PROFILE DETAILS',10,muted,600,'letter-spacing="1"')+text(549,330,'Record identifier',12,muted)+text(829,330,'BR-001',13,ink,600,'text-anchor="end"')+line(549,346,829,346)+text(549,380,'Last updated',12,muted)+text(829,380,'18 Jun',13,ink,600,'text-anchor="end"')+text(549,422,'Notes',12,muted)+rect(549,437,282,49,'#f8f5f1',5)+text(563,467,'Review and update profile details.',12,'#9a8a7f')+button(549,499,282,'Edit record','#96775e'));
save('breeders', 'Breeders app — recreated mobile profile and record screens', s, '#f4efe8');

console.log('Generated 15 distinct case-study interface previews.');
