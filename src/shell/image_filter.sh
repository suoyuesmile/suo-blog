#! /bin/bash

# use some rules to filter image files in dir
# some rules: 
# 1. width equal height, image size max 100k
# 2. width not equal height, image size max 500k
# 3. width not equal height, width should equal 1125px, height equal 744px

# gen_td() {
#         return <td>$1</td>
# }

html_gen='<html><body><table id=rounded-corner ><tr><th>图片目录</th><th>图片名</th><th>图片尺寸</th><th>图片大小</th></tr>'

function read_dir() {
        rootTmpPath=$1
        OLD_IFS="${IFS}"
        IFS=$'\n'

        for file in `ls $1` 
        do 
                if [ -d $1"/"$file ];then
                        read_dir $1"/"$file
                        continue;
                fi

                # echo "------------------------------------start--------------------------------------------\t"

                # echo $1"/"$file\t

                html_gen=$html_gen'<tr>'

                IFS="${OLD_IFS}"

                tmpFile=$(echo $(file $1"/"$file))

                # echo $tmpFile

                x=0
                y=0
                result=''
                pixic=''
                pixic_array=''



                if [ $(expr "$file" : '.*\(\.[j|J][p|P][g|G]\)') ] || [ $(expr "$file" : '.*\(\.[j|J][P|p][E|e][G|g]\)') ]; then
                        result=$(expr "$tmpFile" : '.*\( [0-9]*\x[0-9]*, components\).*')

                        pixic=${result%, components}

                        # echo $pixic

                        # # echo ${OLD_IFS}
                        # pixic_array=${pixic//x/ }
                        IFS="x"
                        pixic_array=($pixic)
                        IFS="${OLD_IFS}"
                        # echo ${#pixic_array[@]}
                        # echo ${pixic_array[0]}
                        # echo ${pixic_array[1]}
                        # echo $pixic_array
                        # echo ${pixic_array[0]}${pixic_array[1]}
                        # for (( i=0 ; i < ${#pixic_array[@] + 1} ; i++ ))
                        # do
                        #         echo $i ${pixic_array[i]}
                        #         if [ $i -eq 0 ]; then
                        #                 x=${pixic_array[i]}
                        #         fi
                        #         if [ $i -eq 1 ]; then
                        #                 y=${pixic_array[i]}
                        #         fi
                        #         # x=$pixic
                        # done
                        x=${pixic_array[0]}

                        y=${pixic_array[1]}
                fi
                if [ $(expr "$file" : '.*\(\.[p|P][n|N][g|G]\)') ]; then
                        result=$(expr "$tmpFile" : '.*\(, [0-9]* x [0-9]*\).*')
                        IFS="x"
                        pixic=${result#, }

                        pixic_array=($pixic)
                        IFS="${OLD_IFS}"


                        x=${pixic_array[0]}

                        y=${pixic_array[1]}
                fi




                size=$(ls -l $1"/"$file | awk '{print $5}')

                x=`eval echo $x`
                y=`eval echo $y`
                

                # rootTmpPath=$($rootTmpPath$1)

                # echo $rootTmpPath, $1

                # echo $x-$y
                if [ ! $x ] || [ ! $y ]; then
                        # echo -e "像素缺失 $1/$file: 像素: $x x $y\033[0m" 
                        continue
                fi

                if [ ! $size ]; then
                        # echo -e "\033[31m 图片大小缺失 $1/$file: 像素: $x x $y \033[0m" 
                        continue
                fi

                main="\033[32m $rootTmpPath\t $file \t $x x $y \t $[$size/1000]k \033[0m"

                # echo -e $main

                html_size="<td> $[$size/1000]k </td>"
                html_px="<td>$x x $y</td>"

                if [ $x -eq $y ] && [ $size -gt 100000 ];then

                        # echo -e "\033[31m Warn: 正方形，大小 $size 字节即 $[$size/1000]k超过100k  \033[0m"
                        html_size="<td> <div style=color:red;>$[$size/1000]k 超过100k</div></td>"
                fi

                if [ $x -eq $y ] && ([ $x -ne 150 ] || [ $y -ne 150 ]);then
                        # echo -e "\033[31m Warn: 正方形，尺寸不为150 * 150 \033[0m"
                        html_px="<td><div style=color:red;>$x x $y 尺寸不合适</div></td>"

                        # html_gen="$html_gen<td>不为150*150</td>"
                fi


                if [ $x -ne $y ] && ([ $x -ne 1125 ] || [ $y -ne 744 ]);then
                        # echo -e "\033[31m Warn: 长方形尺寸不为1125x744 图片不合适 \033[0m"
                        html_px="<td><div style=color:red;>$x x $y 尺寸不合适</div></td>"
                fi

                # if [ $x -ne $y ] && ([ $[$x * 744] -ne $[$y * 1125] ]);then
                        # echo -e "\033[31m Warn: 长方形比例也不为 1125:744，图片不合适 \033[0m"
                # fi

                if [ $x -ne $y ] && [ $size -gt 500000 ];then
                        # echo -e "\t \033[31m Warn: 大小$size 字节即$[$size/1000]k超出500K大小 \033[0m"
                        html_size="<td> <div style=color:red;>$[$size/1000]k 超过500k</div></td>"
                fi

                html_gen="$html_gen<tr><td>$rootTmpPath</td><td>$file</td>$html_px$html_size</tr>"

        done
}
echo 生成报表中...
read_dir $1

result_0=`read_dir $1`;

html_gen=$html_gen'</body><table/></html><style>
#rounded-corner
{
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 12px;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
#rounded-corner thead th.rounded-company
{
  background: #b9c9fe url('table-images/left.png') left -1px no-repeat;
}
#rounded-corner thead th.rounded-q4
{
  background: #b9c9fe url('table-images/right.png') right -1px no-repeat;
}
#rounded-corner th
{
  padding: 8px;
  font-weight: normal;
  font-size: 13px;
  color: #039;
  background: #b9c9fe;
}
#rounded-corner td
{
  padding: 8px;
  background: #e8edff;
  border-top: 1px solid #fff;
  color: #669;
}
#rounded-corner tfoot td.rounded-foot-left
{
  background: #e8edff url('table-images/botleft.png') left bottom no-repeat;
}
#rounded-corner tfoot td.rounded-foot-right
{
  background: #e8edff url('table-images/botright.png') right bottom no-repeat;
}
#rounded-corner tbody tr:hover td
{
  background: #d0dafd;
}
</style>'

echo -e "$html_gen" > $1图片扫描包.html
echo -e "\033[32m生成报告成功! 请查看文件$1.html \033[0m"