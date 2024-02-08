abstract class BaseEnitity {

}

class Employee extends BaseEnitity {PersonelNo : number;}
class Student extends BaseEnitity {StudentNo : number}
class DatabaseService{
    insert <T extends BaseEnitity>(entity : T):boolean{
        console.log(entity);
        if(entity instanceof BaseEnitity){
            return true;
        }
        return false
        
    }
}

const service = new DatabaseService ()
service.insert(new Employee());
service.insert(new Student())