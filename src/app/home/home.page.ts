import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  call(_contact)
  {
      alert(_contact.name + ' '+ _contact.phone);
      window.open('tel:' + _contact.phone);
  }

  contactArray = [{
    "name": "Hi-Tech Pharmacal Co., Inc.",
    "phone": "986-937-1173"
  }, {
    "name": "Prestige Brands Holdings, Inc.",
    "phone": "943-227-6454"
  }, {
    "name": "Aidarex Pharmaceuticals LLC",
    "phone": "313-417-0261"
  }, {
    "name": "Rebel Distributors Corp.",
    "phone": "225-638-3761"
  }, {
    "name": "Itonis, Inc.",
    "phone": "479-527-1907"
  }, {
    "name": "Teva Pharmaceuticals USA Inc",
    "phone": "198-828-3512"
  }, {
    "name": "PHARMAZEUTISCHE FABRIK DR. RECKEWEG & CO",
    "phone": "739-627-6139"
  }, {
    "name": "Babor Cosmetics America, Corp.",
    "phone": "443-139-3962"
  }, {
    "name": "Aledian Corporation",
    "phone": "506-870-7125"
  }, {
    "name": "Crown Laboratories",
    "phone": "138-238-5487"
  }, {
    "name": "Walgreens Company",
    "phone": "788-105-8490"
  }, {
    "name": "Ionx Holdings d/b/a HelloLife",
    "phone": "143-652-4924"
  }, {
    "name": "Neutrogena Corporation",
    "phone": "334-843-2038"
  }, {
    "name": "King Bio Inc.",
    "phone": "674-117-2753"
  }, {
    "name": "Aidarex Pharmaceuticals LLC",
    "phone": "199-119-5103"
  }, {
    "name": "Crosstex International Inc.",
    "phone": "330-325-2837"
  }, {
    "name": "Uriel Pharmacy Inc.",
    "phone": "591-666-8714"
  }, {
    "name": "ALK-Abello, Inc.",
    "phone": "212-807-0524"
  }, {
    "name": "Sandoz Inc",
    "phone": "544-806-9058"
  }, {
    "name": "McKesson Packaging Services a business unit of McKesson Corporation",
    "phone": "477-264-7519"
  }, {
    "name": "County Welding Supply Co.",
    "phone": "382-289-3038"
  }, {
    "name": "Physicians Total Care, Inc.",
    "phone": "558-228-7960"
  }, {
    "name": "SUPERVALU INC.",
    "phone": "816-497-4150"
  }, {
    "name": "Medicis Pharmaceutical Corp.",
    "phone": "417-220-4874"
  }, {
    "name": "OMP, INC.",
    "phone": "764-896-2286"
  }, {
    "name": "Deseret Biologicals, Inc.",
    "phone": "123-454-6465"
  }, {
    "name": "Neutrogena Corporation",
    "phone": "950-942-6761"
  }, {
    "name": "County Line Pharmaceuticals, LLC",
    "phone": "467-804-6021"
  }, {
    "name": "Dispensing Solutions, Inc.",
    "phone": "175-781-2372"
  }, {
    "name": "Takeda Pharmaceuticals America, Inc.",
    "phone": "167-520-0991"
  }, {
    "name": "Unit Dose Services",
    "phone": "189-629-0619"
  }, {
    "name": "Sanofi Pasteur Inc.",
    "phone": "800-995-2732"
  }, {
    "name": "Perrigo New York Inc",
    "phone": "209-414-6813"
  }, {
    "name": "Teva Pharmaceuticals USA",
    "phone": "871-250-2084"
  }, {
    "name": "Nephron Pharmaceuticals Corporation",
    "phone": "585-943-3267"
  }, {
    "name": "Richmond Division of Wyeth",
    "phone": "133-660-8554"
  }, {
    "name": "Patterson Dental Supply Inc",
    "phone": "216-964-1143"
  }, {
    "name": "Premier Brands of America Inc.",
    "phone": "508-979-5690"
  }, {
    "name": "Time-Cap Labs, Inc",
    "phone": "902-756-1525"
  }, {
    "name": "McKesson",
    "phone": "227-394-9708"
  }, {
    "name": "Meijer Distribution Inc",
    "phone": "316-711-4307"
  }, {
    "name": "VVF Illinois Services LLC",
    "phone": "558-482-3261"
  }, {
    "name": "Velocity Pharma",
    "phone": "999-650-7797"
  }, {
    "name": "Johnson & Johnson Sante' Beaute', France",
    "phone": "291-658-1274"
  }, {
    "name": "Acella Pharmaceuticals, LLC",
    "phone": "909-987-8901"
  }, {
    "name": "Physicians Total Care, Inc.",
    "phone": "368-495-9036"
  }, {
    "name": "Pharmaceutical Associates, Inc.",
    "phone": "707-764-4710"
  }, {
    "name": "Jubilant Cadista Pharmaceuticals Inc.",
    "phone": "137-601-9098"
  }, {
    "name": "Western Family Foods, Inc.",
    "phone": "187-707-0278"
  }, {
    "name": "Johnson & Johnson Consumer Products Company, Division of Johnson & Johnson Consumer Companies, Inc.",
    "phone": "228-448-4435"
  }, {
    "name": "CRH Medical Corporation",
    "phone": "929-860-5487"
  }, {
    "name": "Apotheca Company",
    "phone": "672-487-4446"
  }, {
    "name": "Mylan Institutional LLC",
    "phone": "534-268-7932"
  }, {
    "name": "Barr Laboratories Inc.",
    "phone": "820-707-3921"
  }, {
    "name": "Neutrogena Corporation",
    "phone": "292-694-5242"
  }, {
    "name": "Life Line Home Care Services, Inc.",
    "phone": "266-607-2410"
  }, {
    "name": "Sandoz Inc",
    "phone": "665-144-6595"
  }, {
    "name": "Mondelez Global LLC",
    "phone": "253-968-8920"
  }, {
    "name": "American Health Packaging",
    "phone": "857-660-2320"
  }, {
    "name": "ALK-Abello, Inc.",
    "phone": "815-286-5280"
  }, {
    "name": "Mckesson (Sunmark)",
    "phone": "489-812-6817"
  }, {
    "name": "Rebel Distributors Corp",
    "phone": "140-716-4686"
  }, {
    "name": "Legacy Pharmaceutical Packaging",
    "phone": "358-360-9392"
  }, {
    "name": "Walgreen Company",
    "phone": "715-556-7282"
  }, {
    "name": "Preferred Pharmaceuticals, Inc.",
    "phone": "958-577-8686"
  }, {
    "name": "L Perrigo Company",
    "phone": "483-862-8354"
  }, {
    "name": "Wakefern Foods Corporation",
    "phone": "378-307-2201"
  }, {
    "name": "Cardinal Health",
    "phone": "885-743-7456"
  }, {
    "name": "West-ward Pharmaceutical Corp.",
    "phone": "202-412-4781"
  }, {
    "name": "ProBLEN",
    "phone": "358-415-8623"
  }, {
    "name": "The Mentholatum Company",
    "phone": "852-269-8357"
  }, {
    "name": "Neutrogena Corporation",
    "phone": "873-818-2330"
  }, {
    "name": "HART Health",
    "phone": "516-647-5569"
  }, {
    "name": "Colgate-Palmolive Company",
    "phone": "108-329-7979"
  }, {
    "name": "Conopco Inc. d/b/a Unilever",
    "phone": "350-796-3482"
  }, {
    "name": "Trigen Laboratories, Inc.",
    "phone": "369-357-1078"
  }, {
    "name": "Humco Holding Group, Inc.",
    "phone": "607-187-9392"
  }, {
    "name": "Mason Chemical Company",
    "phone": "876-613-3417"
  }, {
    "name": "Watson Laboratories, Inc.",
    "phone": "262-793-2060"
  }, {
    "name": "Boots Retail USA Inc",
    "phone": "377-887-5275"
  }, {
    "name": "Heritage Pharmaceuticals Inc.",
    "phone": "283-695-6445"
  }, {
    "name": "HI TECH PHARMACAL CO INC",
    "phone": "406-336-4339"
  }, {
    "name": "Heel Inc",
    "phone": "383-618-7575"
  }, {
    "name": "REMEDYREPACK INC.",
    "phone": "793-556-8184"
  }, {
    "name": "A-S Medication Solutions LLC",
    "phone": "363-947-4580"
  }, {
    "name": "Baxter Healthcare Corporation",
    "phone": "939-425-3329"
  }, {
    "name": "APP Pharmaceuticals, LLC",
    "phone": "469-155-3561"
  }, {
    "name": "AstraZeneca Pharmaceuticals LP",
    "phone": "594-967-8235"
  }, {
    "name": "Lorac Cosmetics, Inc.",
    "phone": "826-902-4781"
  }, {
    "name": "Antigen Laboratories, Inc.",
    "phone": "202-109-2275"
  }, {
    "name": "McKesson (Health Mart)",
    "phone": "269-984-2144"
  }, {
    "name": "Contract Pharmacy Services-PA",
    "phone": "738-403-2228"
  }, {
    "name": "SHISEIDO CO., LTD.",
    "phone": "916-774-5811"
  }, {
    "name": "West-ward Pharmaceutical Corp.",
    "phone": "619-123-6449"
  }, {
    "name": "Watson Laboratories, Inc.",
    "phone": "417-623-7051"
  }, {
    "name": "Lake Erie Medical DBA Quality Care Products LLC",
    "phone": "863-587-5240"
  }, {
    "name": "H E B",
    "phone": "181-210-5299"
  }, {
    "name": "Sun Pharmaceutical Industries Limited",
    "phone": "696-154-0091"
  }, {
    "name": "GE Healthcare Inc.",
    "phone": "174-482-5551"
  }, {
    "name": "Gilead Sciences, Inc.",
    "phone": "834-754-4594"
  }]
}

