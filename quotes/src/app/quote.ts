export class Quote {
    
    showDescription: boolean;
    constructor(public id: number,public name: string,public quote: string,public aname: string,public completeDate: Date){
        this.showDescription=false;
    }
      
}
