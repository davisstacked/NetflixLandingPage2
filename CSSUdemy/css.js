// CSS tips

// REMS V EMS

// just use rem. Em is trash.

// to make rem responsive (it goes off of <html></html> font-size which is by default 16px. 

// a lot of programmers will set the font-size for html to 10px to make Rems easier to calculate. ie 2rem would then be 20px

// TO MAKE RESPONSIVE - you can make font-size of html 62.5% which is like putting it to 10pxs. but responsive!

// VH and VW

// background: url(‘https:etc’) no-repeat center center/cover;

// FLEX-BOX

// flex-grow - grows to take up remaining size of container. as grows that will grow to take up remaining space.
// flex-shrink: 0 - makes it so the element won’t shrink as the page gets smaller.
// flex-basis: 0  (starting point)
// flex: 1 (grow) 0 (shrink) 200px (basis)

// TARGETED SELECTORS

// only selects direct children of the div.
// div > p {} 

// selects all of the ps within a div.
// div p {}

// selects only the p directly after the div. NOT the child of the div. like whatever paragraph comes right after that div.
// div + p {}

// target by attribute
// a[target]

// nTH-CHILD PSEUDO SELECTORS

// li:first-child {}

// li:last-child {}

// li:nth-child(3) {}

// Every third child
// + 0 is the offset. so you could start on the 2nd or 3rd item by making it 1 or 2.
// li:nth-child(3n + 0) {}

// nth-child(odd)

// nth-child(even)




