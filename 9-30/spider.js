//爬虫
const cheerio=require("cheerio");//第三方模块，从HTML中提取数据

const $=cheerio.load("<url><li>li node1</li></url>");//得到网页文档结构

$("url").append("<li>li node2</li>");//类似jquery操作,区别在于不在网页显示，对文档更改

$("li").each(function(index,el){//遍历
    console.log($(this).text());
})

console.log($.html());