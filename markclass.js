class student
{
    constructor(name,mark1,mark1,mark2,mark3)

    {
        this.name=name;
        this.mark1=mark1;
        this.mark2=mark2;
        this.mark3=mark3;

    }

    display()
    {
        let total=this.mark1+this.mark2+this.mark3;
        let average=total/3;
        
        console.log("student:", this.name);
        console.log('')
    }
}

