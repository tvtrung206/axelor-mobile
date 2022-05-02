import axios from 'axios';

TYPE_INTERNAL = 1;
TYPE_EXTERNAL = 2;
TYPE_VIRTUAL = 3;

export async function searchStockLocation() {
  return axios.post('/ws/rest/com.axelor.apps.stock.db.StockLocation/search', {
    data: {
      // Criteria from request /stock.root.products/list/1
      criteria: [
        {
          operator: 'and',
          criteria: [
            {
              fieldName: 'typeSelect',
              operator: '=',
              value: TYPE_INTERNAL,
            },
            {
              fieldName: 'isWorkshop',
              operator: '=',
              value: false,
            },
            {
              fieldName: 'company.id',
              operator: '=',
              value: 1,
            },
          ],
        },
      ],
    },
    fields: ['name', 'id'],
    sortBy: ['id', 'name'],
    limit: 20,
    offset: 0,
  });
}
