const h1 = document.getElementById('h1');
const name =['ajay','ram','shobhit','abhishek']

const changeValue  =()=>{
    h1.textContent = `Hello, ${name[Math.floor(Math.random() * name.length)]}!`;
    h1.addEventListener('click', changeValue);
    // setTimeout(changeValue, 2000);
}

changeValue();

const p =document.getElementById('para')
const changeValueP = ()=>{
    p.textContent="this is new long paragraph.hi my name is shobhtt"
}
p.addEventListener('click',changeValueP);

const Num=[1,2,3.4,3.8,5,6.4,3]
Num.push(30);
let NewNum =Num.map((Num)=>{
    
    return (Math.floor(Num+10));
   
    
})

console.log(NewNum);
 console.log(Num.length);

 document.getElementById("btn")
 btn.addEventListener("click", () => {
    btn.textContent='Submited'
    console.log('Button Clicked');  // Alert message when button is clicked
    alert('i love you');
    // btn.disabled = true;  // Disable the button after it is clicked
  });   


  async function myfn() {
    return 'Shobhit';
  }
  const yourfn= myfn();
  console.log(yourfn); // Promise { <fullfilled> }
async function main(){
    const res = await yourfn;
    return 'shobhit'
} 
const res = main()
console.log(res);//{<make that promise prnding>}

