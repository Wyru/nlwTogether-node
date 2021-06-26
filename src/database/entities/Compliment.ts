import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Tag } from "./Tag";
import { User } from "./User";


@Entity('compliments')
class Compliment {

  @PrimaryColumn()
  readonly id: string;

  @Column({ name: "user_sender" })
  userSenderId: string;

  @JoinColumn({ name: "user_sender" })
  @ManyToOne(() => User)
  userSender: User


  @Column({ name: "user_receiver" })
  userReceiverId: string;

  @JoinColumn({ name: "user_receiver" })
  @ManyToOne(() => User)
  userReceiver: User


  @Column({ name: "tag_id" })
  tagId: string;

  @JoinColumn({ name: "tag_id" })
  @ManyToOne(() => Tag)
  tag: Tag

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;



  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Compliment }