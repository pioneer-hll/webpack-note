/**
 * Created by hll on 2017/11/26.
 */
module.exports={
    entry:'./src/main.js',  //ָ�����������ļ�
    output:{
        //path:'dist'  //Ҫ��·��Ϊ����·��
        path:__dirname+'/dist',
        filename:'build.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'  //˳���ܸ�
            }
        ]
    }
}