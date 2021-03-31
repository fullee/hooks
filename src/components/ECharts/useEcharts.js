import {useEffect} from "react";
import * as echarts from "echarts";

const useEcharts = (echartsRef, option)=>{
    useEffect(() => {

        let EchartsInstance = echarts.getInstanceByDom(echartsRef.current)
        if (!EchartsInstance) {
            EchartsInstance = echarts.init(echartsRef.current)
        }
        EchartsInstance.setOption(option)
        return () => {
            EchartsInstance && EchartsInstance.dispose()
        }
    },[option,echartsRef])

}


export default useEcharts
