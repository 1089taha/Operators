"use strict";
// //ADDITION
let balls_in_bag1 = 13;
let balls_in_bag2 = 17;
let total_balls = balls_in_bag1 + balls_in_bag2;
console.log(total_balls);
// //SUBTRACTION
let fruits_in_bag1 = 20;
let give_away_fruits = 7;
let remaining_fruits = fruits_in_bag1 - give_away_fruits;
console.log(remaining_fruits);
// //MULTIPLICATION
let first_inn_score = 120;
let sec_inn_score = 50;
let total_score = first_inn_score * sec_inn_score;
console.log(total_score);
// //DIVISION
let batsman_inns_runs = 10 + 23 + 47 + 56 + 70;
let total_inns = 5;
let bats_average = batsman_inns_runs / total_inns;
console.log(bats_average.toFixed(5));
// // MODULUS
let pastries = 20;
let number_of_people = 7;
let remaining_pastries = pastries % number_of_people;
console.log(remaining_pastries);
// // INCREMENT
let banana = 10;
banana++;
banana++;
console.log(banana);
// //DECREMENT
let kiwi = 11;
kiwi--;
kiwi--;
console.log(kiwi);
// // EXPONENT
let number = 10;
let power = 10 ** 2;
console.log(power);
// // COMBINNIG OPERATOR
let first_match_score = 120;
let sec_match_score = 180;
let third_match_score = 20;
let all_matches_score = first_match_score + sec_match_score * third_match_score;
console.log(all_matches_score);
// COMPARISION OPERATOR
let a = 10;
let b = 20;
console.log(a == b);
console.log(a != b);
let A = '10';
let B = '10';
console.log(a === b);
console.log(a !== b);
let c = 89;
let d = 69;
console.log(c > d);
console.log(c >= d);
let C = 100;
let D = 80;
console.log(c < d);
console.log(c <= d);
// LOGICAL OPERATORS:
//AND OPERATOR:
let isCloud = true;
let isWeekend = false;
let canGoPicnic = isCloud && isWeekend;
console.log(canGoPicnic); // output is false because one condition is false:
let money = true;
let bikeAvailable = true;
let can_i_buy_bike = money && bikeAvailable;
console.log(can_i_buy_bike); // output is true because both condition is true:*/
// OR OPERATOR:
let convence = true;
let timeAvailable = false;
let can_go_seminar = convence || timeAvailable;
console.log(can_go_seminar); // output is true because one condition is true:
let Convence = false;
let time_available = false;
let canGoSeminar = Convence || time_available;
console.log(canGoSeminar); // output is false because boyh condition is false:
// NOT OPERATOR:
let isBbqParty = true;
let canGoParty = !isBbqParty;
console.log(canGoParty); // output is false because in NOT operator true is false:
let is_bbq_party = false;
let can_go_party = !is_bbq_party;
console.log(can_go_party); // output is true because in NOT operator false is true:
