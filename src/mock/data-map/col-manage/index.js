import Mock from '@/mock'
import DateUtils from '../../../utils/dateUtils'

import {ApiUrl, DataType} from '../../../services/data-map/col-manage'

export let ColList = [
    {id: 1, tbId: 1, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 2, tbId: 2, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 3, tbId: 3, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 4, tbId: 4, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 5, tbId: 5, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 6, tbId: 6, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 7, tbId: 7, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 8, tbId: 8, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 9, tbId: 9, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 10, tbId: 10, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 11, tbId: 11, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 12, tbId: 12, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 13, tbId: 13, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 14, tbId: 14, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 15, tbId: 15, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 16, tbId: 16, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 17, tbId: 17, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 18, tbId: 18, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 19, tbId: 19, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 20, tbId: 20, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 21, tbId: 21, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 73, tbId: 22, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 74, tbId: 22, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 23, tbId: 23, colName: 'col_1', colComment: '字段描述信息', colLabel: '订单ID', originalDataType: 'VARCHAR', dataType: DataType.text.code},
    {id: 24, tbId: 1, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 25, tbId: 2, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 26, tbId: 3, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 27, tbId: 4, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 28, tbId: 5, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 29, tbId: 6, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 30, tbId: 7, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 31, tbId: 8, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 32, tbId: 9, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 33, tbId: 10, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 34, tbId: 11, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 35, tbId: 12, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 36, tbId: 13, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 37, tbId: 14, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 38, tbId: 15, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 39, tbId: 16, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 40, tbId: 17, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 41, tbId: 18, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 42, tbId: 19, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 43, tbId: 20, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 44, tbId: 21, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 45, tbId: 23, colName: 'col_2', colComment: '字段描述信息', colLabel: '订单金额', originalDataType: 'BIGINT', dataType: DataType.num.code},
    {id: 46, tbId: 1, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 47, tbId: 2, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 48, tbId: 3, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 49, tbId: 4, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 50, tbId: 5, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 51, tbId: 6, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 52, tbId: 7, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 53, tbId: 8, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 54, tbId: 9, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 55, tbId: 10, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 56, tbId: 11, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 57, tbId: 12, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 58, tbId: 13, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 59, tbId: 14, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 60, tbId: 15, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 61, tbId: 16, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 62, tbId: 17, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 63, tbId: 18, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 64, tbId: 19, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 65, tbId: 20, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 66, tbId: 21, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 67, tbId: 23, colName: 'col_3', colComment: '字段描述信息', colLabel: '创建时间', originalDataType: 'DATETIME', dataType: DataType.date.code},
    {id: 68, tbId: 23, colName: 'col_4', colComment: '字段描述信息', colLabel: '统计日期', originalDataType: 'VARCHAR', dataType: DataType.text_day_8.code},
    {id: 69, tbId: 23, colName: 'col_5', colComment: '字段描述信息', colLabel: '创建日期', originalDataType: 'VARCHAR', dataType: DataType.text_day_10.code},
    {id: 70, tbId: 23, colName: 'col_6', colComment: '字段描述信息', colLabel: '创建月份', originalDataType: 'VARCHAR', dataType: DataType.text_month_7.code},
    {id: 71, tbId: 23, colName: 'col_7', colComment: '字段描述信息', colLabel: '统计月份', originalDataType: 'VARCHAR', dataType: DataType.text_month_6.code},
    {id: 72, tbId: 23, colName: 'col_8', colComment: '字段描述信息', colLabel: '年', originalDataType: 'VARCHAR', dataType: DataType.text_year.code}
]

export default {
    bootstrap (mock) {
        Mock.post(mock, ApiUrl.searchTb.name, ApiUrl.searchTb.api, function (params) {
            let pageNo = params.pageNo
            let pageSize = params.pageSize
            let data = TbList.filter(t => {
                if (params.dbId) {
                    if (t.dbId === params.dbId) {
                        if (params.tbName) {
                            if (t.tbName.includes(params.tbName.toLowerCase()) || t.remark.includes(params.tbName)) {
                                return true
                            }
                            return false
                        }
                        return true
                    }
                    return false
                } else {
                    if (params.tbName) {
                        if (t.tbName.includes(params.tbName.toLowerCase()) || t.remark.includes(params.tbName)) {
                            return true
                        }
                        return false
                    }
                }
                return true
            })
            let res = {
                total: data.length,
                data: pageSearch(data, pageNo, pageSize)
            }
            return res
        })
    }
}