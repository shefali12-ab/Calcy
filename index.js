// const marks=document.getElementsByClassName("appformcontrol");
const calcy=()=>{
    let phy=document.getElementById("phy").value;
    let chem=document.getElementById("chem").value;
    let maths=document.getElementById("maths").value;
    let comp=document.getElementById("comp").value;
    let totalMarks=parseFloat(phy)+parseFloat(chem)+parseFloat(maths)+parseFloat(comp);
    let percentage=parseFloat(totalMarks/400)*100;
    console.log(`total marks are ${totalMarks} and percentage is ${percentage}`);
    document.getElementById('showdata').innerHTML= `Totals marks of student is ${totalMarks} and Percentage is ${percentage} `
}
