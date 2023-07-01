import { v4 } from 'uuid'

export const ordersMockData = [
  {
    id: v4(),
    order_name: `Товар ${v4()}`,
    created_date: new Date(),
    owner: {
      name: `Kushbak ${v4()}`
    }
  }, {
    id: v4(),
    order_name: `Товар ${v4()}`,
    created_date: new Date(),
    owner: {
      name: `Kushbak ${v4()}`
    }
  }, {
    id: v4(),
    order_name: `Товар ${v4()}`,
    created_date: new Date(),
    owner: {
      name: `Kushbak ${v4()}`
    }
  }, {
    id: v4(),
    order_name: `Товар ${v4()}`,
    created_date: new Date(),
    owner: {
      name: `Kushbak ${v4()}`
    }
  }, {
    id: v4(),
    order_name: `Товар ${v4()}`,
    created_date: new Date(),
    owner: {
      name: `Kushbak ${v4()}`
    }
  },
]