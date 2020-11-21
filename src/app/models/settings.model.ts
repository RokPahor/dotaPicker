import { Deserializable } from './deserialize.model';
import { Status } from '../enums/status.enum';

export class Settings implements Deserializable {
    public radiantHeroes: any[];
    public direHeroes: any[];
    public selectedTeam: string;
    public status: Status;
    public showSelected: string;

  
    deserialize(input: any): this {
        this.radiantHeroes = input.radiantHeroes;
        this.direHeroes = input.direHeroes;
        this.selectedTeam = input.selectedTeam;
        this.status = input.status;
        this.showSelected = input.showSelected;
        return this;
    }
    
  }  
  
