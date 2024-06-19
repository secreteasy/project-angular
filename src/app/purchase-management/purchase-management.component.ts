import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase/purchase.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RejectDialogComponent } from '../reject-dialog/reject-dialog.component';
import { CommonModule } from '@angular/common';
import { ProductAdminService } from '../product-admin/product-admin.service';



@Component({
  selector: 'purchase-management',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
  ],
  templateUrl: './purchase-management.component.html',
  styleUrl: './purchase-management.component.css',
})
export class PurchaseManagementComponent implements OnInit {
  purchases: any[] = [];
  

  constructor(
    private purchaseService: PurchaseService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadPurchases();
  }

  loadPurchases(): void {
    this.purchaseService.getPurchases().subscribe(data => {
      this.purchases = data;
    });
  }

  confirmPurchase(purchaseId: number): void {
    this.purchaseService.confirmPurchase(purchaseId).subscribe(response => {
      alert('Покупка подтверждена');
      this.loadPurchases(); // Обновление списка покупок после подтверждения
    }, error => {
      console.error('Ошибка при подтверждении покупки:', error);
      alert('Ошибка при подтверждении покупки');
    });
  }

  openRejectDialog(purchaseId: number): void {
    const dialogRef = this.dialog.open(RejectDialogComponent, {
      width: '250px',
      data: { purchaseId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.rejectPurchase(purchaseId);
      }
    });
  }

  rejectPurchase(purchaseId: number): void {
    this.purchaseService.rejectPurchase(purchaseId).subscribe(response => {
      alert('Покупка отклонена');
      this.loadPurchases(); // Обновление списка покупок после отклонения
    }, error => {
      console.error('Ошибка при отклонении покупки:', error);
      alert('Ошибка при отклонении покупки');
    });
  }
}
