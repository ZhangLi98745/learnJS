/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  '__jd_ref_cls=JDReact_StartReactModule;__jda=122270672.16134762674811560393541.1613476267.1613476267.1613476267.1;__jdb=122270672.5.16134762674811560393541|1.1613476267;__jdc=122270672;mba_muid=16134762674811560393541;mba_sid=16134762674831331203866346411.5;mobilev=html5;TrackerID=VPUBDWx4lffq8I1pSk8jhg3h3TpJuKo1ULGkKo7G0RRqOjTGIPFSw5ype2nyvMmktIcsG026pDNGA--kIKPQ3xXWHofqxf5N_QegNj8ICxVxpapA2mBvUgPw3CJC4X7n;pt_key=AAJgK7IZADAInqmAuFGRm8Sr_cXdZf3FG4GvpaJBL99UP5aYlshEbDWE00KtdZUvwUc6tPoxn1E;pt_pin=%E6%AF%95%E8%82%96%E7%84%B6;pt_token=lgoz6ejk;pwdt_id=%E6%AF%95%E8%82%96%E7%84%B6;sfstoken=tk01mea351d47a8sMysyeDErMSsxiIXCfDM6NiWzqOAc6EnosUwPzbg5e6XGjL3BGXW8LlkmsnyjPaPOfur8J8WeMs+F;whwswswws=;jcap_dvzw_fp=o2BqRbvUmo-8O9hSu7-zsf8BIxfVNYLOEzpsQ14DRfA8of5Np6XVYq2xLNI2E0BX;3AB9D23F7A4B3C9B=RXXLP5FTG6TBAM7XC2BJC4SQANJQFZQT4QH6HKCIKCSCGCPHGC3FB532NLBIDMV5HYPQO3OOHKJVJT2WJG46MQZLWM;shshshfpb=gS9HhEiwrUnK9PeWZsprwMg%3D%3D;shshshfp=37efeaa37cbc641765e707f170e120c8;shshshfpa=fad3a85b-02de-abeb-621e-724570168f62-1596710426;shshshsID=ab1a762d9052191db892785672c69bbf_1_1613476327919;__jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1613476267482;__jdu=16119689798341968563618;cn=0;mt_xid=V2_52007VwMVUl1QVVMXTxFVB2IDGlVUXFVYGEkQbAdhBRdRWQsCRhsZTV4ZYgFGU0FRAgoWVRkLUWcKFwcJUQENTHkaXQZnHxNRQVlVSxxIElgEbAIVYl9oUWoWTR5bBWcBF1BaWltdGEkRWwZhMxBbVVw%3D;user-key=41b82f6e-6448-4ff7-9ff4-cb683ca717ca;unpl=V2_ZzNtbUdSQUJxCk5VKRtfVWIEElxKUhRFIQxCVXwZDwJjURJeclRCFnUUR1RnG10UZwQZWEFcQhFFCEdkexhdBGAAEFtKXnMldDhFVEsZXTVnBBJdSlBKHXMAT1Z%2bGVQCbgcVX0VXSiVFD3ZkJkEYTDoDGllGZ0MXcQtBUH0YXQBXAiJdQF5CFXwNQVJ6KRdrZk4SWkJXSxJ8AEBcchtZBW8EG1lFVUQVfDhHZHg%3d;pinId=oaZHt4hXtk4GpTfm2vSyKQ;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJgNd_5ADDGuRXM9VSgdZ0A7DCQg5gNQljcswp50o1yTOx796AFc_BHsp4Y9FAniqppHEwfkhw;pt_pin=zhangli.se_m;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  '__jd_ref_cls=JDReact_StartReactModule;mba_muid=1614063998133445099747;mba_sid=16140639981352711481652917672.8;__jda=122270672.1614063998133445099747.1614063998.1614063998.1614063998.1;__jdb=122270672.8.1614063998133445099747|1.1614063998;__jdc=122270672;mobilev=html5;TrackerID=eFuJcMBofYFoBryQa01MDbi43ReSR0b4SS1kADiZ3k4EJpc_xBb0-GmFtV6FhGfHO2J0L2RorD7D-v2EUM8jG96ERSqKJybZjpCSyrij4uNsv4ug75dP1kcrLoteIPEJ;pt_key=AAJgNLAVADDN6vmoiPlhRIQfy3vLiHEnaOohYaJSP5c8jrdL1p9FUyPEg-x2v7OFmZBXJT8BWKM;pt_pin=shine%E4%B8%B6%E5%87%A1;pt_token=qotcgagy;pwdt_id=shine%E4%B8%B6%E5%87%A1;sfstoken=tk01mb7311c17a8sMisyMTNZRTFpZe/6kxr3uEVCIYHJN/KF3rQQBoNAywjX2DsbeoXrUisUHBNS6QQg4uROw8OU5JWP;whwswswws=;jcap_dvzw_fp=jxiWBY82LtmBk-d-viGI9mxiNR1OlD1KdU_O5LJKS4vmpw2fQHqMZCqHmrLps50o;3AB9D23F7A4B3C9B=LMRENLZI7BIRA6DQ7J7MFD34NRMQCPP7GJVQIAWFSVODKBNLVQ633S5X2QT5ML2SSPSTC6VEKELNNUKXRVIUMV6EVE;shshshfp=2532b9fa03b2396e5ee20710f8a20320;shshshfpa=91f7f3d0-93c0-54a3-1043-c034553205a3-1614064109;shshshfpb=qiR2F0uWQnrDzhVsCpGND8g%3D%3D;shshshsID=139ca5c14e53e95b7d1b968c9f5a76bb_4_1614065596321;__jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1614063998133;',
  '__jd_ref_cls=JDReact_StartReactModule;mba_muid=1614066366388343097959;mba_sid=16140663663898149936298108814.7;__jda=122270672.1614066366388343097959.1614066366.1614066366.1614066366.1;__jdb=122270672.7.1614066366388343097959|1.1614066366;__jdc=122270672;mobilev=html5;TrackerID=5N7-BZPzCQH6KCtkBW4i4noEFsMwrLRNS6gTfVr1yz3zDe9cPN_UzMe9vYWf_fZMHPjTJYHj_G0YL_cs9EsH2quthXOcRoXzxAKC4scmmPGjJGUgVvVrz4BCggsp3kEcmVITsrZP9GxAR5Hb5bhXmg;pt_key=AAJgNLNHADDNiOu2mUg7KMcABlVRDa_CllG3RUhnig1Om4JTLtG4omNFYMSKBa6y0cGMFxHdvts;pt_pin=%E6%A9%98%E5%AD%90%E6%B4%B2%E6%9F%927;pt_token=043y95ye;pwdt_id=%E6%A9%98%E5%AD%90%E6%B4%B2%E6%9F%927;sfstoken=tk01mcc5e1cc0a8sM3gzeDFtMkdxuYU9TX26HKfVFs5w1gxGgnZWf+kFniEf+O5cqezweOogomkeY+/tSIRoQ5d5PVBO;whwswswws=;jcap_dvzw_fp=WhgiG9AQH5c9Xr7uS8taB51J3hlMpVlLH9hlsOt2R6z8mNMn-zWgVDvKlxlTWgP6dPOrDA==;3AB9D23F7A4B3C9B=LMRENLZI7BIRA6DQ7J7MFD34NRMQCPP7GJVQIAWFSVODKBNLVQ633S5X2QT5ML2SSPSTC6VEKELNNUKXRVIUMV6EVE;shshshfp=2532b9fa03b2396e5ee20710f8a20320;shshshfpa=cf181b60-2225-24da-3e9c-c2deb3cf1aba-1614066463;shshshfpb=wv%2BEtGSsr3yE9edbGwC3%2F9w%3D%3D;shshshsID=c05fbe327ac72a152699b7c24c4a68e6_1_1614066463157;__jdv=122270672%7Cdirect%7C-%7Cnone%7C-%7C1614066366388;',
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
