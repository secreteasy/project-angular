import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'reject-dialog',
  standalone: true,
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.css'],
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule
  ],
})
export class RejectDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RejectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { purchaseId: number }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
