// code solution here
class President{
  constructor(name, politicalParty, yearsInOffice, homeState){
    this.name = name
    this.politicalParty = politicalParty
    this.yearsInOffice = yearsInOffice
    this.homeState = homeState
  }

  veto(){
    console.log("NO!")
    return 'NO!'
  }

  passBill(){
    console.log('You can do that!');
    return 'You can do that!'
  }

  doCharity(){
    console.log('I like to help people.');
    return 'I like to help people.'
  }
  conductPressInterview(){
    console.log('I am proud to be an American.');
    return 'I am proud to be an American.'
  }

  sayHi(){
    console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`);
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }
}
