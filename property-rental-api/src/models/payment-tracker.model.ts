import {Entity, model, property} from '@loopback/repository';

@model()
export class PaymentTracker extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentAmountPaid: string;

  @property({
    type: 'date',
    required: true,
  })
  paymentDate: string;

  @property({
    type: 'string',
    required: true,
  })
  propertyId: string;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'date',
  })
  updatedAt?: string;


  constructor(data?: Partial<PaymentTracker>) {
    super(data);
  }
}

export interface PaymentTrackerRelations {
  // describe navigational properties here
}

export type PaymentTrackerWithRelations = PaymentTracker & PaymentTrackerRelations;
