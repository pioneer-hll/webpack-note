/**
 * Created by hll on 2017/11/26.
 */
module.exports={
    entry:'./src/main.js',  //指定打包的入口文件
    output:{
        //path:'dist'  //要求路径为绝对路径
        path:__dirname+'/dist',
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'  //顺序不能改
            }
        ]
    }
}