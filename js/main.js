$(document).ready(function(){

    $('.lds-ring').fadeOut(500,function(){
        $('#loading').fadeOut(500);
        $('#loading').remove();
        $('body').css('overflowY','auto');
    })
    
    let yearExperienceCounter=0;
    let workcounter=0;
    let clientCounter=0;
    let awardCounter=0;
    function styleOfFacts(elementId,counter)
    {
       $(elementId).css({'color':'white','font-weight':'400','font-size':'40px'});
       $(elementId).html(counter);
    }
    $(window).scroll(function(){

        let wScrollTop=$(window).scrollTop();
        let aboutOffset=$('#about').offset().top;
        let factsOffset=$('.facts').offset().top;
       
        if(wScrollTop > factsOffset)
        {
           let workCompleteInterval=  setInterval(() => {
            workcounter =workcounter + 45;
                styleOfFacts('.workCounter',workcounter);
                if (workcounter == 450)
                {
                    workcounter=0;
                    clearInterval(workCompleteInterval);
                }
                
            },50);
            let yearExperienceInterval=setInterval(() => {
                yearExperienceCounter =yearExperienceCounter + 2;
                styleOfFacts('.yearsExperienceCounter',yearExperienceCounter);
                if (yearExperienceCounter == 24)
                {
                    yearExperienceCounter=0;
                    clearInterval(yearExperienceInterval);
                }
            }, 50);
            let clientInterval=  setInterval(() => {
                clientCounter =clientCounter + 55;
                    styleOfFacts('.clientCounter',clientCounter);
                    if (clientCounter == 550)
                    {
                        clientCounter=0;
                        clearInterval(clientInterval);
                    }
                    
                },50);
                let awardWonInterval=setInterval(() => {
                    awardCounter =awardCounter + 4;
                    styleOfFacts('.awardCounter',awardCounter);
                    if (awardCounter == 48)
                    {
                        awardCounter=0;
                        clearInterval(awardWonInterval);
                    }
                }, 50);
        }
        
        if (wScrollTop > aboutOffset-50)
        {
            $('.navbar').css('backgroundColor','black');
            $('.backtop-icon').css('display','inline-block');
        }
        else
        {
            $('.navbar').css('backgroundColor','transparent');
            $('.backtop-icon').css('display','none');
        }
    })
})