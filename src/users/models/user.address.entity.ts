import {
  Table,
  Column,
  Model,
  DataType,
  Sequelize,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from 'sequelize-typescript';
import { IUserAddress } from '../interfaces/IUserAddress';
import { Asset } from '../../chain-abstraction/models/asset.entity';
import { User } from './user.entity';

const options = {
  modelName: 'UserAddress',
  indexes: [
    {
      unique: true,
      fields: ['id'],
    },
    {
      fields: ['assetId'],
    },
    {
      fields: ['userId'],
    },
  ],
};
@Table(options)
export class UserAddress extends Model<IUserAddress> {
  @Column({
    type: DataType.UUIDV4,
    defaultValue: Sequelize.literal('uuid_generate_v4()'),
    allowNull: false,
    primaryKey: true,
    unique: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  userId: string;

  @ForeignKey(() => Asset)
  // @BelongsTo(() => Asset, 'id')
  assetId: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  address: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Asset)
  asset: Asset;
}
