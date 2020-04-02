export class Quote {
    
    showDescription: boolean;
    constructor(public id: number,public username: string,public description: string,public author: string,public completeDate: Date){
        this.showDescription=false;
    }
      
}
