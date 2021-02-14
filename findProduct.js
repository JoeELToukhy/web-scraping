var request = require('request');
const cheerio = require('cheerio');

function findProduct (){

    var headers = {
        'Host': 'www.shopdisney.co.uk',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        // 'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9'
    };
    
    var options = {
        url: 'https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html',
        headers: headers
    };
    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(response.body);
            const title = $('#productDetailsColumn > h1').text();
            const csrf_token = $('.csrftoken').attr('value');;
            // console.log(csrf_token);
            console.log("The name of the product : ", title);
            var headers = {
                'Host': 'www.shopdisney.co.uk',
                'Connection': 'keep-alive',
                'Accept': '*/*',
                'DNT': '1',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cookie': '__cfduid=d991a19e68e08af0f3cd2628be5a5facf1613258212; dwac_cdYLkiaagQNQ6aaadqpRAb3HPZ=KVRQWG4YRPYa-PeHgdN2n8h9onSi3yuM01M%%3D|dw-only|||GBP|false|Europe%%2FLondon|true; cqcid=abqz0OnENtwnBZPJhqZYGkCj60; cquid=||; sid=KVRQWG4YRPYa-PeHgdN2n8h9onSi3yuM01M; dwanonymous_4b4f41ef658a5f7622324979f744826c=abqz0OnENtwnBZPJhqZYGkCj60; __cq_dnt=0; dw_dnt=0; dwsid=1QPlGsWgwUgHfTv2VzmoajQqFzYJZ64yztbB_wiUcPKYEYRSxQdMga8Rx9WwYrIJOImSbBkPGNPL_s4TVAJK0g==; uvtddl=1; SWID=c16f4263-d253-4b68-9919-ebb4b87b3fa4; __cq_bc=%%7B%%22aamz-disneyuk%%22%%3A%%5B%%7B%%22id%%22%%3A%%222841047080168M%%22%%7D%%5D%%7D; __cq_seg=0~0.00!1~0.00!2~0.00!3~0.00!4~0.00!5~0.00!6~0.00!7~0.00!8~0.00!9~0.00; __cq_uuid=abqz0OnENtwnBZPJhqZYGkCj60; CONSENTMGR=c1:1%%7Cc2:1%%7Cc3:1%%7Cc4:1%%7Cc5:1%%7Cc6:1%%7Cc17:1%%7Cc18:1%%7Cc19:1%%7Cc20:1%%7Cc21:1%%7Cc22:1%%7Cc23:1%%7Cc24:1%%7Cc25:1%%7Cc26:1%%7Cc27:1%%7Cc28:1%%7Cc29:1%%7Cc30:1%%7Cc31:1%%7Cc33:1%%7Cc37:1%%7Cc38:1%%7Cts:1613258225373%%7Cconsent:true; DisneyCookieConsentChecksum=-636545365; _uetsid=96cc0c406e5111eb8532039cf4b2bdf1; _uetvid=96cd3d806e5111eb89c4abeff3f997b4; _cs_c=1; _cs_id=bef278e2-9a2b-a7dd-8c75-c879c5043431.1613258226.1.1613258226.1613258226.1.1647422226883.Lax.0; _cs_s=1.0; _gcl_au=1.1.520243474.1613258227; s_ecid=MCMID%%7C82897768848044369812092192538758260442; AMCVS_CC0A3704532E6FD70A490D44%%40AdobeOrg=1; AMCV_CC0A3704532E6FD70A490D44%%40AdobeOrg=-281048578%%7CMCIDTS%%7C18672%%7CMCMID%%7C82897768848044369812092192538758260442%%7CMCAID%%7CNONE%%7CMCOPTOUT-1613265428s%%7CNONE%%7CMCAAMLH-1613863028%%7C6%%7CMCAAMB-1613863028%%7Cj8Odv6LonN4r3an7LhD3WZrU1bUpAkFkkiY1ncBR96t2PTI%%7CvVersion%%7C4.6.0; utag_main=v_id:01779daef17300091e3826597dea03073006906b00978$_sn:1$_se:6$_ss:0$_st:1613260025416$ses_id:1613258223989%%3Bexp-session$_pn:1%%3Bexp-session$_prevpage:shopdisney%%3Adepartments%%3Afancydress%%3Adisney%%20store%%20disney%%20princess%%20costume%%20collection%%20for%%20kids%%3Bexp-1613261825419$vapi_domain:shopdisney.co.uk$user_status:inc%%3Bexp-session; _cs_mk=0.790109836613371_1613258228978; gpv_pn=emea%%3Auk%%3Ashopdisney%%3Adepartments%%3Afancydress%%3Adisney%%20store%%20disney%%20princess%%20costume%%20collection%%20for%%20kids; s_tp=3250; s_ppv=emea%%253Auk%%253Ashopdisney%%253Adepartments%%253Afancydress%%253Adisney%%2520store%%2520disney%%2520princess%%2520costume%%2520collection%%2520for%%2520kids%%2C23%%2C23%%2C754; s_cc=true; s_ptc=0.01%%5E%%5E0.00%%5E%%5E0.00%%5E%%5E0.22%%5E%%5E0.51%%5E%%5E0.05%%5E%%5E10.71%%5E%%5E0.06%%5E%%5E11.54; BVBRANDID=0070ea09-f10c-480a-9c6d-21b8626031d1; BVBRANDSID=a3ee7c9c-fff3-49b7-a8e7-a2eff590bb41; s_sq=wdgintemea%%3D%%2526c.%%2526a.%%2526activitymap.%%2526page%%253Demea%%25253Auk%%25253Ashopdisney%%25253Adepartments%%25253Afancydress%%25253Adisney%%252520store%%252520disney%%252520princess%%252520costume%%252520collection%%252520for%%252520kids%%2526link%%253D5-6%%252520Y%%2526region%%253Dva-size%%2526pageIDType%%253D1%%2526.activitymap%%2526.a%%2526.c%%2526pid%%253Demea%%25253Auk%%25253Ashopdisney%%25253Adepartments%%25253Afancydress%%25253Adisney%%252520store%%252520disney%%252520princess%%252520costume%%252520collection%%252520for%%252520kids%%2526pidt%%253D1%%2526oid%%253D5-6%%252520Y%%2526oidt%%253D3%%2526ot%%253DSUBMIT'
            };
            
            var options = {
                url: 'https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Product-Variation?format=ajax&csrf_token=U5wq2IO7V5I1d2fEUEkdEa8vtOHP2PEhTiNd6mYxlfx6yTirFRkp2nj2QjMCy5g6FkeYoRtKDhVy8Os56rejbr8W-O47kpNkkE-eA6g9mhj8g6ifynEhKjDBgA0bZp0fcw9veFOEU3Jqnm3hrmzwKeyvV8upVNOU5BIq-gH1I6prncNf4uo%%3D&cartAction=add&pid=2841047080168M&dwvar_2841047080168M_size=5-6%%20YEARS&_=1613258220388',
                headers: headers
            };
            
            function callback(error, response, body) {
                if (!error && response.statusCode == 200) {
                    const $ = cheerio.load(response.body);
                    const csrf_token2 = $('.csrftoken').attr('value');;
                    // console.log(csrf_token2);
                    // console.log(csrf_token);
                    var headers = {
                        'Host': 'www.shopdisney.co.uk',
                        'Connection': 'keep-alive',
                        'Accept': '*/*',
                        'DNT': '1',
                        'X-Requested-With': 'XMLHttpRequest',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'Origin': 'https://www.shopdisney.co.uk',
                        'Sec-Fetch-Site': 'same-origin',
                        'Sec-Fetch-Mode': 'cors',
                        'Sec-Fetch-Dest': 'empty',
                        'Referer': 'https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html',
                        'Accept-Language': 'en-US,en;q=0.9',
                        'Cookie': '__cfduid=d991a19e68e08af0f3cd2628be5a5facf1613258212; dwac_cdYLkiaagQNQ6aaadqpRAb3HPZ=KVRQWG4YRPYa-PeHgdN2n8h9onSi3yuM01M%%3D|dw-only|||GBP|false|Europe%%2FLondon|true; cqcid=abqz0OnENtwnBZPJhqZYGkCj60; cquid=||; sid=KVRQWG4YRPYa-PeHgdN2n8h9onSi3yuM01M; dwanonymous_4b4f41ef658a5f7622324979f744826c=abqz0OnENtwnBZPJhqZYGkCj60; __cq_dnt=0; dw_dnt=0; dwsid=1QPlGsWgwUgHfTv2VzmoajQqFzYJZ64yztbB_wiUcPKYEYRSxQdMga8Rx9WwYrIJOImSbBkPGNPL_s4TVAJK0g==; uvtddl=1; SWID=c16f4263-d253-4b68-9919-ebb4b87b3fa4; __cq_bc=%%7B%%22aamz-disneyuk%%22%%3A%%5B%%7B%%22id%%22%%3A%%222841047080168M%%22%%7D%%5D%%7D; __cq_seg=0~0.00!1~0.00!2~0.00!3~0.00!4~0.00!5~0.00!6~0.00!7~0.00!8~0.00!9~0.00; __cq_uuid=abqz0OnENtwnBZPJhqZYGkCj60; CONSENTMGR=c1:1%%7Cc2:1%%7Cc3:1%%7Cc4:1%%7Cc5:1%%7Cc6:1%%7Cc17:1%%7Cc18:1%%7Cc19:1%%7Cc20:1%%7Cc21:1%%7Cc22:1%%7Cc23:1%%7Cc24:1%%7Cc25:1%%7Cc26:1%%7Cc27:1%%7Cc28:1%%7Cc29:1%%7Cc30:1%%7Cc31:1%%7Cc33:1%%7Cc37:1%%7Cc38:1%%7Cts:1613258225373%%7Cconsent:true; DisneyCookieConsentChecksum=-636545365; _uetsid=96cc0c406e5111eb8532039cf4b2bdf1; _uetvid=96cd3d806e5111eb89c4abeff3f997b4; _cs_c=1; _cs_id=bef278e2-9a2b-a7dd-8c75-c879c5043431.1613258226.1.1613258226.1613258226.1.1647422226883.Lax.0; _cs_s=1.0; _gcl_au=1.1.520243474.1613258227; s_ecid=MCMID%%7C82897768848044369812092192538758260442; AMCVS_CC0A3704532E6FD70A490D44%%40AdobeOrg=1; AMCV_CC0A3704532E6FD70A490D44%%40AdobeOrg=-281048578%%7CMCIDTS%%7C18672%%7CMCMID%%7C82897768848044369812092192538758260442%%7CMCAID%%7CNONE%%7CMCOPTOUT-1613265428s%%7CNONE%%7CMCAAMLH-1613863028%%7C6%%7CMCAAMB-1613863028%%7Cj8Odv6LonN4r3an7LhD3WZrU1bUpAkFkkiY1ncBR96t2PTI%%7CvVersion%%7C4.6.0; utag_main=v_id:01779daef17300091e3826597dea03073006906b00978$_sn:1$_se:6$_ss:0$_st:1613260025416$ses_id:1613258223989%%3Bexp-session$_pn:1%%3Bexp-session$_prevpage:shopdisney%%3Adepartments%%3Afancydress%%3Adisney%%20store%%20disney%%20princess%%20costume%%20collection%%20for%%20kids%%3Bexp-1613261825419$vapi_domain:shopdisney.co.uk$user_status:inc%%3Bexp-session; _cs_mk=0.790109836613371_1613258228978; gpv_pn=emea%%3Auk%%3Ashopdisney%%3Adepartments%%3Afancydress%%3Adisney%%20store%%20disney%%20princess%%20costume%%20collection%%20for%%20kids; s_tp=3250; s_ppv=emea%%253Auk%%253Ashopdisney%%253Adepartments%%253Afancydress%%253Adisney%%2520store%%2520disney%%2520princess%%2520costume%%2520collection%%2520for%%2520kids%%2C23%%2C23%%2C754; s_cc=true; s_ptc=0.01%%5E%%5E0.00%%5E%%5E0.00%%5E%%5E0.22%%5E%%5E0.51%%5E%%5E0.05%%5E%%5E10.71%%5E%%5E0.06%%5E%%5E11.54; BVBRANDID=0070ea09-f10c-480a-9c6d-21b8626031d1; BVBRANDSID=a3ee7c9c-fff3-49b7-a8e7-a2eff590bb41; s_sq=wdgintemea%%3D%%2526c.%%2526a.%%2526activitymap.%%2526page%%253Demea%%25253Auk%%25253Ashopdisney%%25253Adepartments%%25253Afancydress%%25253Adisney%%252520store%%252520disney%%252520princess%%252520costume%%252520collection%%252520for%%252520kids%%2526link%%253D5-6%%252520Y%%2526region%%253Dva-size%%2526pageIDType%%253D1%%2526.activitymap%%2526.a%%2526.c%%2526pid%%253Demea%%25253Auk%%25253Ashopdisney%%25253Adepartments%%25253Afancydress%%25253Adisney%%252520store%%252520disney%%252520princess%%252520costume%%252520collection%%252520for%%252520kids%%2526pidt%%253D1%%2526oid%%253D5-6%%252520Y%%2526oidt%%253D3%%2526ot%%253DSUBMIT'
                    };
                    
                    var dataString = 'format=ajax&csrf_token='+csrf_token+'&cartAction=add&pid=2841047080168M&dwvar_2841047080168M_size=5-6 YEARS';
                    
                    var options = {
                        url: 'https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/SiteDatalayer-Product',
                        method: 'POST',
                        headers: headers,
                        body: dataString
                    };
                    
                    function callback(error, response, body) {
                        if (!error && response.statusCode == 200) {
                            console.log(body);
                            var headers = {
                                'Host': 'www.shopdisney.co.uk',
                                'Connection': 'keep-alive',
                                'Accept': '*/*',
                                'DNT': '1',
                                'X-Requested-With': 'XMLHttpRequest',
                                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
                                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                                'Origin': 'https://www.shopdisney.co.uk',
                                'Sec-Fetch-Site': 'same-origin',
                                'Sec-Fetch-Mode': 'cors',
                                'Sec-Fetch-Dest': 'empty',
                                'Referer': 'https://www.shopdisney.co.uk/disney-store-disney-princess-costume-collection-for-kids-2841047080168M.html',
                                'Accept-Language': 'en-US,en;q=0.9',
                                'Cookie': '__cfduid=d991a19e68e08af0f3cd2628be5a5facf1613258212; dwac_cdYLkiaagQNQ6aaadqpRAb3HPZ=KVRQWG4YRPYa-PeHgdN2n8h9onSi3yuM01M%%3D|dw-only|||GBP|false|Europe%%2FLondon|true; cqcid=abqz0OnENtwnBZPJhqZYGkCj60; cquid=||; sid=KVRQWG4YRPYa-PeHgdN2n8h9onSi3yuM01M; dwanonymous_4b4f41ef658a5f7622324979f744826c=abqz0OnENtwnBZPJhqZYGkCj60; __cq_dnt=0; dw_dnt=0; dwsid=1QPlGsWgwUgHfTv2VzmoajQqFzYJZ64yztbB_wiUcPKYEYRSxQdMga8Rx9WwYrIJOImSbBkPGNPL_s4TVAJK0g==; uvtddl=1; SWID=c16f4263-d253-4b68-9919-ebb4b87b3fa4; __cq_bc=%%7B%%22aamz-disneyuk%%22%%3A%%5B%%7B%%22id%%22%%3A%%222841047080168M%%22%%7D%%5D%%7D; __cq_seg=0~0.00!1~0.00!2~0.00!3~0.00!4~0.00!5~0.00!6~0.00!7~0.00!8~0.00!9~0.00; __cq_uuid=abqz0OnENtwnBZPJhqZYGkCj60; DisneyCookieConsentChecksum=-636545365; _cs_c=1; _cs_id=bef278e2-9a2b-a7dd-8c75-c879c5043431.1613258226.1.1613258226.1613258226.1.1647422226883.Lax.0; _cs_s=1.0; _gcl_au=1.1.520243474.1613258227; s_ecid=MCMID%%7C82897768848044369812092192538758260442; AMCVS_CC0A3704532E6FD70A490D44%%40AdobeOrg=1; AMCV_CC0A3704532E6FD70A490D44%%40AdobeOrg=-281048578%%7CMCIDTS%%7C18672%%7CMCMID%%7C82897768848044369812092192538758260442%%7CMCAID%%7CNONE%%7CMCOPTOUT-1613265428s%%7CNONE%%7CMCAAMLH-1613863028%%7C6%%7CMCAAMB-1613863028%%7Cj8Odv6LonN4r3an7LhD3WZrU1bUpAkFkkiY1ncBR96t2PTI%%7CvVersion%%7C4.6.0; _cs_mk=0.790109836613371_1613258228978; gpv_pn=emea%%3Auk%%3Ashopdisney%%3Adepartments%%3Afancydress%%3Adisney%%20store%%20disney%%20princess%%20costume%%20collection%%20for%%20kids; s_tp=3250; s_cc=true; BVBRANDID=0070ea09-f10c-480a-9c6d-21b8626031d1; BVBRANDSID=a3ee7c9c-fff3-49b7-a8e7-a2eff590bb41; CONSENTMGR=c1:1%%7Cc2:1%%7Cc3:1%%7Cc4:1%%7Cc5:1%%7Cc6:1%%7Cc17:1%%7Cc18:1%%7Cc19:1%%7Cc20:1%%7Cc21:1%%7Cc22:1%%7Cc23:1%%7Cc24:1%%7Cc25:1%%7Cc26:1%%7Cc27:1%%7Cc28:1%%7Cc29:1%%7Cc30:1%%7Cc31:1%%7Cc33:1%%7Cc37:1%%7Cc38:1%%7Cts:1613258246614%%7Cconsent:true; utag_main=v_id:01779daef17300091e3826597dea03073006906b00978$_sn:1$_se:7$_ss:0$_st:1613260046616$ses_id:1613258223989%%3Bexp-session$_pn:1%%3Bexp-session$_prevpage:shopdisney%%3Adepartments%%3Afancydress%%3Adisney%%20store%%20disney%%20princess%%20costume%%20collection%%20for%%20kids%%3Aoverlay%%3Bexp-1613261846622$vapi_domain:shopdisney.co.uk$user_status:inc%%3Bexp-session; _uetsid=96cc0c406e5111eb8532039cf4b2bdf1; _uetvid=96cd3d806e5111eb89c4abeff3f997b4; s_ptc=0.01%%5E%%5E0.00%%5E%%5E0.00%%5E%%5E0.22%%5E%%5E0.51%%5E%%5E0.05%%5E%%5E10.71%%5E%%5E0.06%%5E%%5E11.54; s_ppv=emea%%253Auk%%253Ashopdisney%%253Adepartments%%253Afancydress%%253Adisney%%2520store%%2520disney%%2520princess%%2520costume%%2520collection%%2520for%%2520kids%%2C30%%2C23%%2C966; s_sq=wdgintemea%%3D%%2526c.%%2526a.%%2526activitymap.%%2526page%%253Demea%%25253Auk%%25253Ashopdisney%%25253Adepartments%%25253Afancydress%%25253Adisney%%252520store%%252520disney%%252520princess%%252520costume%%252520collection%%252520for%%252520kids%%2526link%%253DAdd%%252520to%%252520Bag%%2526region%%253Ddwfrm_product_addtocart_d0nuzkhcssdh%%2526pageIDType%%253D1%%2526.activitymap%%2526.a%%2526.c%%2526pid%%253Demea%%25253Auk%%25253Ashopdisney%%25253Adepartments%%25253Afancydress%%25253Adisney%%252520store%%252520disney%%252520princess%%252520costume%%252520collection%%252520for%%252520kids%%2526pidt%%253D1%%2526oid%%253DAdd%%252520to%%252520Bag%%2526oidt%%253D3%%2526ot%%253DSUBMIT'
                            };
                            
                            var dataString = 'format=ajax&Quantity=1&pid=428411449056&csrf_token='+csrf_token2;
                            // console.log(dataString)
                            // console.log(csrf_token2)
                            // console.log(csrf_token)
                            var options = {
                                url: 'https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct',
                                method: 'POST',
                                headers: headers,
                                body: dataString
                            };
                            
                            function callback(error, response, body) {
                                if (!error && response.statusCode == 200) {
                                    console.log(body);
                                }
                            }
                            
                            request(options, callback);
                            
                        }
                    }
                    
                    request(options, callback);
                    

                }
            }
            
            request(options, callback);
            
        }
            
    }
    
    request(options, callback);
}

findProduct()
