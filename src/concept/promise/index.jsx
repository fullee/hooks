import {useEffect} from "react";

const PromiseFeature = () => {
    async function demoSuccess() {
        return new Promise((resolve, reject) => {
            console.log('demoSuccess')
            resolve('success')

            // console.log('demoFailed')
            // reject('failed')
        })
    }

    function demoFailed() {
        return new Promise((resolve, reject) => {
            console.log('demoFailed')
            reject('failed')
        })
    }

    // 1. 基础使用方法
    // useEffect(() => {
    //     demoSuccess()
    //         .then(
    //             (val) => {
    //                 // throw new Error(`E ${val}`)
    //                 console.log(`s ${val}`)
    //                 // return Promise.resolve('Promise.resolve')
    //                 return Promise.reject('Promise.reject')
    //             },
    //             (val) => {
    //                 console.log(`f ${val}`)
    //                 return demoFailed()
    //             })
    //         .catch(
    //             (val) => {
    //                 // throw new Error(`catch ${val}`)
    //                 console.log(`catch ${val}`)
    //                 return Promise.reject('catch Promise.reject')
    //             })
    //         .then(
    //             (val) => {
    //                 console.log(`rs ${val}`)
    //             },
    //             (val) => {
    //                 console.log(`rf ${val}`)
    //             })
    //
    // }, [])
    //
    // // 2. 组合使用
    // useEffect(() => {
    //     console.log('========组合使用=======')
    //     Promise.all([demoSuccess, demoFailed]).then(([d1, d2]) => {
    //         console.log('s ' + d1)
    //         console.log('f ' + d2)
    //     })
    //
    // }, [])

    // 3. await
    useEffect(() => {

        async function x() {
            // try {
            //     const s = await demoSuccess()
            //
            //     console.log("await s: " + s)
            // } catch (err){
            //     console.log("await e:"+err)
            // } finally {
            //     console.log("无论如何我都会执行")
            // }
            //
            // demoSuccess().then((val) => {
            //     console.log("then s: " + val)
            // }).catch((err)=>{
            //     console.log("catch e:"+err)
            // })

            demoSuccess().then((val) => {
                console.log("then s: " + val)
                return val
            }).then((val) => {
                console.log("看看有没有: " + val)

            }).catch((err)=>{
                console.log("catch e:"+err)
            }).finally((val)=>{
                console.log("无论如何我都会执行")
            })

        }

        console.log('========await=======')
        x()
    })

    return <>PromiseFeature</>
}

export default PromiseFeature
