import {Sequelize, Model, DataTypes} from 'sequelize' 

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});


class TraansactionLog extends Model {}

TraansactionLog.init({
  id: DataTypes.STRING,
  user_id: DataTypes.STRING,
  product_id: DataTypes.STRING,
  action: DataTypes.ENUM('view', 'purchase')
}, { sequelize, modelName: 'transactionLog' });

export {TraansactionLog as Log}

(async () => {
  await sequelize.sync();
  const logExample = await TraansactionLog.create({
    id: '123456',
    user_id: '456789',
    product_id: '789456',
    action: 'view'
  });
  console.log(logExample.toJSON());
})();