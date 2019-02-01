using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactCoreHome.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public List<ContactCard> WebContacts()
        {
            var ReturnList = new List<ContactCard>();
            var WebContact = new ContactCard()
            {
                FirstName = "Mikael",
                SurName = "Strid",
                Email = "Mikael.strid@xlent.se",
                Phone = "+46(0)736 - 89 29 33",
                Source = "Website",
                WebSiteLink = "https://www.mikaelstrid.net"
            };
            ReturnList.Add(WebContact);
            return ReturnList;
        }

        public class ContactCard
        {
            public string FirstName { get; set; }
            public string SurName { get; set; }
            public string Phone { get; set; }
            public string Email { get; set; }
            public string WebSiteLink { get; set; }
            public string Source{ get; set; }
        }
    }
}
