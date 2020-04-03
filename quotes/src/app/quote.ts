export class Quote {
    likes: number; 
    dislikes: number;
    constructor(public name: string,public quote: string,public author: string,public postedOn: Date){
        this.likes = 0;
        this.dislikes = 0;
        
    }
      
}
