import React from 'react'

import './index.scss'
function Index() {
    return (
        <div className="index-page">
            <div className="video-section">
                {/* <video  muted="" data-autoplay="" loop="loop" autoPlay="autoplay" src="//s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v3_4138031.mp4" className="video" id="video-tvc" data-object-fit="">抱歉，您的浏览器不支持内嵌视频</video> */}
                <video loop="loop" autoPlay="autoplay" src="//pzpsn4agr.bkt.clouddn.com/%E7%9C%9F%E7%88%B1%E5%AE%9DPC%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91.mp4" className="video">抱歉，您的浏览器不支持内嵌视频</video>
            </div>
            <div className="content-section">
                
            </div>
        </div>
    )
}

export default Index;