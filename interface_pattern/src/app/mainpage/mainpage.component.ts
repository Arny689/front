import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { map } from 'rxjs';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { PostsDto } from '../dto/posts.dto';
import { UsersDto } from '../dto/users.dto';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(
    private userService: DataService,
    private transferService: TransferService,
    private routes: Router) {}

  user: UsersDto[] = []

  post: PostsDto[] = []

  outputRoute: string = this.routes.url

  p: number = 1

  currentId: number = 0
  
  testValue = new FormGroup({
    testValue1: new FormControl({value: false, disabled: false})
  })
  
  @Output() messageEvent = new EventEmitter<string>()

  @ViewChild('tableOfInfo') tableOfInfo: ElementRef

  sendRoute() {
    this.messageEvent.emit(this.outputRoute)
  }

  private showPosts(): void {
    this.userService.getPosts(String(this.currentId))
    .pipe(map(response => {
      if(response) {
        return Object.values(response)
      }
      return []
    })).subscribe({
      next: _ => 
      { 
        this.post = _
        console.log(this.post);
        
      }
    })
  }

  remove(item: PostsDto): void {
    this.post = this.post.filter(post => post !== item);
  }
  delete(id: string, item: PostsDto): void {
    this.remove(item)
    this.userService.removePost(id).subscribe()
  }

  ngOnInit(): void {
    this.showPosts()
  }

  readonly columns = ['id', 'title', 'filePath', 'status', 'updatedAt', 'id', 'login', 'actions']

  searchText: string = ''

  exportUsers() {
    const wb: XLSX.WorkBook = XLSX.utils.book_new()
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.tableOfInfo.nativeElement)
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    XLSX.writeFile(wb, 'Users.xlsx')
  }

  reverse = true
  
  sortData() {
    if(this.reverse) {
      let newArray = this.user.sort((a:any,b:any)=> b.id - a.id)
      this.reverse = !this.reverse;
    }
    else if(!this.reverse){
      let newArray = this.user.sort((a:any,b:any)=> a.id - b.id)
      this.reverse = !this.reverse
    }
  }

  downloadData(id: number) {
    this.userService.getIndex('http://localhost:8080/download',{id})
  }

  getIdFromAuthComponent() {
    this.transferService.getData().subscribe(data => {
      this.currentId = data
    });
  }

}
