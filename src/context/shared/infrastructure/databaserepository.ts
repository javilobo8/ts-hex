import { IdValueObject } from '../domain/valueObject/IdValueObject.js'
import { AggregateRoot } from '../domain/AggregateRoot.js'

export abstract class DatabaseRepository<T extends AggregateRoot<never>> {
  abstract findById (id: IdValueObject): Promise<T>
  abstract save (entity: T): Promise<void>
}