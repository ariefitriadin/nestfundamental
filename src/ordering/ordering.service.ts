import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './entities/order.entity';
@Injectable()
export class OrderingService {
  private orders: Order[] = [
    {
      id: 1,
      buyerName: 'Boss',
      products: ['soap', 'pasta'],
      totalQty: 10,
      total: 10000,
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: string) {
    const order= this.orders.find((item) => item.id === +id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  create(createOrderDto: any) {
    this.orders.push(createOrderDto);
    return createOrderDto;
  }

  update(id: string, updateOrderDto: any) {
    const existingCoffee = this.findOne(id);
    return `id #${id} updated succesfully`;
  }

  remove(id: string) {
    const orderIndex = this.orders.findIndex((item) => item.id === +id);
    if (orderIndex >= 0) {
      this.orders.splice(orderIndex, 1);
    }
  }
}
