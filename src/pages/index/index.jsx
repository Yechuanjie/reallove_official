import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import musicOn from '../../assets/sound-on.png';
import musicOff from '../../assets/sound-off.png';
import commingIcon from '../../assets/comming.png';
import wechatIcon from '../../assets/wechat-icon.jpg';

function Index() {
  const [muted, setMuted] = useState(true);
  const [appIcon, setAppIcon] = useState(wechatIcon);
  const typeList = [
    {
      type: '微信',
      icon: wechatIcon,
      active: true,
    },
    {
      type: 'QQ',
      icon: commingIcon,
      active: false,
    },
    {
      type: '支付宝',
      icon: commingIcon,
      active: false,
    },
  ];

  const [appList, setAppList] = useState(typeList);

  const mouseOver = index => {
    if (index === 0) {
      setAppIcon(wechatIcon);
    } else if (index === 1) {
      setAppIcon(commingIcon);
    } else if (index === 2) {
      setAppIcon(commingIcon);
    }
    const list = appList.map((item, idx) => {
      item.active = index === idx;
      return item;
    });
    setAppList(list);
  };

  const togglePlay = () => {
    setMuted(!muted);
  };
  const isPC = () => {
    var userAgentInfo = window.navigator.userAgent;
    var Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod',
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  };

  return (
    <div className="official-page">
      {isPC() && (
        <div className="index-page">
          <div className="video-section">
            <video
              id="video"
              muted={muted}
              loop="loop"
              autoPlay="autoplay"
              src="http://pzpsn4agr.bkt.clouddn.com/%E7%9C%9F%E7%88%B1%E5%AE%9DPC%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91.mp4"
              className="video"
            >
              抱歉，您的浏览器不支持内嵌视频
            </video>
          </div>
          <div className="content-section">
            <div className="head-section">
              <img
                src={muted ? musicOff : musicOn}
                alt=""
                className="music-icon"
                onClick={togglePlay}
              />
              {/* <Link className="introduce">平台介绍 ></div>
                    <Link className="introduce">平台介绍 ></div> */}
              <Link className="introduce" to="/introduce">
                平台介绍 >
              </Link>
            </div>
            <div className="info-section">
              <div className="info-title">真爱宝，</div>
              <div className="info-title">让世界多一点真爱</div>
              <div className="icon-section">
                <div className="app-icon-section">
                  <img src={appIcon} alt="" className="app-icon" />
                  <div className="app-tip">
                    <div className="app-tip-line left"></div>
                    <div className="app-tip-txt">扫码即可使用</div>
                    <div className="app-tip-line"></div>
                  </div>
                </div>
                <div className="app-type">
                  {/* <div className={`type ${defaultActive}`} onMouseOver={() => mouseOver(0)}>微信</div>
                            <div className="type" onMouseOut={mouseOut} onMouseOver={() => mouseOver(1)}>QQ</div>
                            <div className="type" onMouseOut={mouseOut} onMouseOver={() => mouseOver(2)}>支付宝</div> */}
                  {appList.map((item, index) => {
                    return (
                      <div
                        key={item.type}
                        className={`type ${item.active ? 'active' : ''}`}
                        onMouseOver={() => mouseOver(index)}
                      >
                        {item.type}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="copyright-section">
              <div className="app-desc">
                <div className="txt">在线领证</div>
                <div className="line"></div>
                <div className="txt">他人感情史查询</div>
              </div>
              <div className="txt">
                www . serious . love @ AlI rights Reserved
              </div>
            </div>
          </div>
        </div>
      )}
      {!isPC() && (
        <div className="mobile-page">
          {window.innerHeight < 800 && (
            <img
              src="http://pzpsn4agr.bkt.clouddn.com/%E6%89%8B%E6%9C%BA%E5%AE%98%E7%BD%91@3x.png"
              alt=""
            />
          )}
          {window.innerHeight >= 800 && (
            <img
              src="http://pzpsn4agr.bkt.clouddn.com/%E6%89%8B%E6%9C%BA%E7%89%88@XMAX.png"
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Index;
