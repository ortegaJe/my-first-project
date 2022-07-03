import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from './product';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products = <IProduct[]>{}; 
  public product = {
    name : 'Nico'
  }
  public selectedproduct = <IProduct>{}; 
  public btnTitle = '';
  public modalTitle = '';
  public btnColor = '';
  public img = 'https://source.unsplash.com/random';
  public name = new FormControl('');
  public description = new FormControl('');
  public price = new FormControl('');
  modalRef?: BsModalRef;
  page = 4;

  constructor(private service: ProductService, private modalService: BsModalService) { }
  
    openModal(template: TemplateRef<any>, product?:IProduct) {
      if (product) {
        this.modalTitle = 'Edit Product';
        this.btnTitle = 'Update';
        this.btnColor = 'success';
        this.name.setValue(product.name);
        this.description.setValue(product.description);
        this.price.setValue(product.price);
        this.selectedproduct = product;
      } else {
        this.modalTitle = 'Add Product';
        this.btnTitle = 'Save';
        this.btnColor = 'primary';
        this.reset();
      }
      this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.list().subscribe(response => this.products = response);
  }

  save() {
    this.selectedproduct.name = this.name.value;
    this.selectedproduct.description = this.description.value;
    this.selectedproduct.price = this.price.value;

    if (this.btnTitle == 'Update') {
      this.service.update(this.selectedproduct)
        .subscribe(response => {
          this.getList();
        });
    } else {
      this.service.add(this.selectedproduct)
        .subscribe(response => {
          this.getList();
        });
    }
  }

    delete(product: IProduct) {
      this.service.delete(product).subscribe(response => this.getList());
      console.log(product);
  }

  reset() {
    this.name.reset();
    this.description.reset();
    this.price.reset();
  }

}
