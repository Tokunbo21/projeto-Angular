import { Component } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  faTimes = faTimes;

  constructor(public messageService: MessageService){}

}
