export class StorageManagerCustom{
    private storage:Storage;
    constructor(storageType:'local'|'session')
    {
        this.storage=storageType==='local'?localStorage : sessionStorage;
    }
    public setItem(key:string,value:any):void{
        this.storage.setItem(key,JSON.stringify(value))
    }
    getItem(key:string):string|null{
        const item = this.storage.getItem(key)
    
    return item?JSON.parse(item):null
    }
    public removeItem(key: string): void {
        this.storage.removeItem(key);
      }
    
      // Public method to clear storage
      public clear(): void {
        this.storage.clear();
      }


}