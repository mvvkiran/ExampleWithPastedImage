import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: string;
  productName: string;
  firstStock: number;
  sold: number;
  dateAdded: string;
  pricing: number;
  rating: number;
  isSelected: boolean;
  status: 'published' | 'draft';
}

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-dashboard.html',
  styleUrls: ['./product-dashboard.css']
})
export class ProductDashboardComponent {
  activeTab: 'published' | 'draft' = 'published';
  
  products: Product[] = [
    {
      id: '1',
      productName: 'MacBook Pro with M2 Chip',
      firstStock: 4159,
      sold: 878,
      dateAdded: 'Jul 14, 2023',
      pricing: 1200,
      rating: 4.8,
      isSelected: false,
      status: 'published'
    },
    {
      id: '2',
      productName: 'iPhone 15 128 / 256 / 512 IBOX',
      firstStock: 1590,
      sold: 981,
      dateAdded: 'Aug 09, 2023',
      pricing: 1660,
      rating: 5.0,
      isSelected: true,
      status: 'published'
    },
    {
      id: '3',
      productName: 'Apple Watch Ultra 2 Alphine',
      firstStock: 1090,
      sold: 184,
      dateAdded: 'Aug 12, 2023',
      pricing: 999,
      rating: 4.7,
      isSelected: true,
      status: 'published'
    },
    {
      id: '4',
      productName: 'iPhone 15 Pro Max 256',
      firstStock: 2590,
      sold: 995,
      dateAdded: 'Aug 24, 2023',
      pricing: 1600,
      rating: 4.2,
      isSelected: false,
      status: 'published'
    },
    {
      id: '5',
      productName: 'MacBook Pro with M2 Chip',
      firstStock: 4100,
      sold: 645,
      dateAdded: 'Nov 30, 2023',
      pricing: 1200,
      rating: 5.0,
      isSelected: false,
      status: 'published'
    },
    {
      id: '6',
      productName: 'Apple Watch Series 9 45MM',
      firstStock: 3140,
      sold: 981,
      dateAdded: 'Dec 04, 2023',
      pricing: 980,
      rating: 4.6,
      isSelected: false,
      status: 'published'
    },
    {
      id: '7',
      productName: 'Apple Watch Ultra 2 Alphine',
      firstStock: 2150,
      sold: 167,
      dateAdded: 'Dec 08, 2023',
      pricing: 799,
      rating: 4.8,
      isSelected: false,
      status: 'published'
    }
  ];

  currentPage = 1;
  itemsPerPage = 7;
  totalItems = 120;

  get publishedProducts(): Product[] {
    return this.products.filter(p => p.status === 'published');
  }

  get draftProducts(): Product[] {
    return this.products.filter(p => p.status === 'draft');
  }

  get displayedProducts(): Product[] {
    return this.activeTab === 'published' ? this.publishedProducts : this.draftProducts;
  }

  setActiveTab(tab: 'published' | 'draft'): void {
    this.activeTab = tab;
  }

  toggleProductSelection(productId: string): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.isSelected = !product.isSelected;
    }
  }

  exportProducts(): void {
    console.log('Exporting products...');
  }

  editProduct(productId: string): void {
    console.log('Editing product:', productId);
  }

  deleteProduct(productId: string): void {
    console.log('Deleting product:', productId);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
}