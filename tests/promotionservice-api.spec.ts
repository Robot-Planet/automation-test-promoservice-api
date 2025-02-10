import {test, expect} from '@playwright/test';

test.describe('PromotionService API Tests', () => {
    let userId: string;

    test('POST - ConvertOverDiscountPayment', async ({ request }) => {
        const response = await request.post('http://10.3.0.121/PromotionService/api/ConvertOverDiscountPayment', {
        // const response = await request.post('http://10.3.0.xxx/PromotionServiceXXX/api/ConvertOverDiscountPayment', {
          data: {
            "PosConnectionString": "Data Source=10.3.8.223;Initial Catalog=KPI-POS-HANA;Persist Security Info=True;User ID=sa;Password=sql2000",
            "EcouponDBConnectionString": "Data Source=10.3.8.223;Initial Catalog=eCoupon;Persist Security Info=True;User ID=sa;Password=sql2000",
            "StrCode": "Z99",
            "BranchNo": "40",
            "SubBranch": "MHN-HANA",
            "ProductItem": [
                {
                    "Line": 1,
                    "Article": "000000000003016824",
                    "Cate": "371",
                    "Brand": "MLW",
                    "Net": 300.0,
                    "DiscPercent": null,
                    "DiscAmt": 0.0,
                    "IsMaxDisc": false,
                    "MaxPercent": null,
                    "DiscSum": 0.0,
                    "IsLockDiscount": false,
                    "Freeze": null,
                    "IsCalculate": false
                }
            ],
            "PromoList": [],
            "GwlNo": "",
            "ObjPrivilege": {
                "CurrentPrivilege": null,
                "PreviousPrivilege": null
            }
         }
        });
    });
  });