import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/models/Note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  [x: string]: any;

  note: Note;

  constructor(private _activateRoute: ActivatedRoute, private _noteService: NotesService) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(routeData => {
      this._noteService.getNote(routeData.get('id')).subscribe((singleNote: Note) => {
        this.note = singleNote;
      });
    });
  }


  
}
