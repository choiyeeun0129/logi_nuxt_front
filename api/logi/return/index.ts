import { logiApi } from "@/api";

const GET_RETURNLIST_URL = "/sales/getReturnList";
const GET_RETURN_LIST_FORSTOCK_URL = 'sales/returnListForStock';
const UPDATE_RETURN_URL = "/sales/updateReturn";
const DELETE_RETURN_URL = "/sales/deleteReturn";
const ADD_RETURN_URL = "/sales/addReturn";

const SEARCH_RETURN_STOCKLIST_URL = '/sales/searchReturnStockList'
const ADD_RETURNSTOCK_URL = '/sales/addReturnStock'
const DELETE_RETURNSTOCK_URL = '/sales/deleteReturnStock'

//반품요청 조회
function getReturnList(startDate: any, endDate: any ) {
  return logiApi.get(`${GET_RETURNLIST_URL}`, {
    params: {
        startDate, 
        endDate
    },
  });
}

//반품요청 조회
function getReturnListForStock() {
  return logiApi.get(`${GET_RETURN_LIST_FORSTOCK_URL}`);
}

//반품요청 수정
function updateReturn(returnList: any) {
    return logiApi.put(`${UPDATE_RETURN_URL}`, returnList)
  }

//반품요청 취소
function deleteReturn(returnNo: string) {
    return logiApi.delete(`${DELETE_RETURN_URL}/${returnNo}`)
  }

//반품요청 등록
function addReturn(params: Object) {
  return logiApi.post(`${ADD_RETURN_URL}`, params)
}

//반품재고입고 품목별 조회
function searchReturnStockList(itemCode: any) {
  return logiApi.get(`${SEARCH_RETURN_STOCKLIST_URL}`, {
    params: {
      itemCode,
    },
  });
}

//반품재고입고 요청 등록
function addReturnStock(params: Object) {
  return logiApi.post(`${ADD_RETURNSTOCK_URL}`, params)
}

//반품재고요청 삭제 
function deleteReturnStock(rtrnRecNo: string) {
  return logiApi.delete(`${DELETE_RETURNSTOCK_URL}/${rtrnRecNo}`)
}

export{ getReturnList, getReturnListForStock, updateReturn, deleteReturn, addReturn, searchReturnStockList, addReturnStock, deleteReturnStock }
