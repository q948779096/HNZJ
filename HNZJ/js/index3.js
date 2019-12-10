var infa = document.getElementById('infa');
		var sa = document.getElementById('sa');
		var infb = document.getElementById('infb');
		var sd = document.getElementById('sd');
		var infc = document.getElementById('infc');
		var sc = document.getElementById('sc');
		infa.onclick = function() {

			if(sa.offsetHeight == 0) {
				sa.style.height = "60px";
			} else {
				sa.style.height = "0px";
			}
		}

		infb.onclick = function() {

			if(sd.offsetHeight == 0) {
				sd.style.height = "60px";
			} else {
				sd.style.height = "0px";
			}
		}

		infc.onclick = function() {

			if(sc.offsetHeight == 0) {
				sc.style.height = "60px";
			} else {
				sc.style.height = "0px";
			}
		}

//------------------------------------------------------------------------
  // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
option = {
    title : {
        text: '河南职业技术学院',
        subtext: '学生人数扇形图',
        x:'center'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['商学院','电气工程学院','汽车工程学院','音乐学院','信息工程学院']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'商学院'},
                {value:310, name:'电气工程学院'},
                {value:234, name:'汽车工程学院'},
                {value:135, name:'音乐学院'},
                {value:1548, name:'信息工程学院'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
       // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);