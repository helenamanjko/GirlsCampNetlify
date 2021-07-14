import { Tema } from './Tema';
import { User } from './User';

export class Postagem {
  public id: number;
  public conteudoPostagem: string;
  public criadoEm: Date;
  public atualizadoEm: Date;
  public emergencia: boolean;
  public tema: Tema;
  public usuario: User;
}
