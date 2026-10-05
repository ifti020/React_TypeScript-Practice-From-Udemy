//Notes:
//  Regular function-এর ভিতরে this পরিবর্তন হয়ে যায়,
// তাই এখানে this.name থেকে javascript object-এর name পাওয়া যায় না.
var javascript = {
  name: "javaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach(function (a) {
      console.log(`${this.name} loves ${a}`);
    });
  },
};

javascript.printLibraries();
console.log();
//Notes:
// Arrow function আসার আগে এই সমস্যার সমাধান হিসেবে
// outer this-কে একটি variable (যেমন self) এ store করে
// callback-এর ভিতরে সেই variable ব্যবহার করা হতো.
var javascript = {
  name: "javaScript",
  libraries: ["React", "Angular", "Vue"],
  showLibraries: function () {
    var self=this;
    this.libraries.forEach(function (a) {
      
      console.log(`${self.name} loves ${a}`);
    });
  },
};

javascript.showLibraries();
console.log();
//Notes:
// Now covert far arrow function
// Arrow function নিজের this তৈরি করে না,
// তাই এটি outer this-কে preserve করে.
// ফলে self variable ব্যবহার না করেই
// সরাসরি outer this ব্যবহার করা যায়.

console.log("Using Fat arrow:");
var javascript = {
  name: "javaScript",
  libraries: ["React", "Angular", "Vue"],
  displayLibraries: function () {
  
    this.libraries.forEach((a) =>{
      console.log(`${this.name} loves ${a}`);
    });
  },
};

javascript.displayLibraries();