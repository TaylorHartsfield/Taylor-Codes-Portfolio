export default function LeanrningCounter() {

const beginning = new Date("January 20, 2022");
const current = new Date()
const days = Math.floor(((current - beginning)/(1000*60*60*24)))

return days

}