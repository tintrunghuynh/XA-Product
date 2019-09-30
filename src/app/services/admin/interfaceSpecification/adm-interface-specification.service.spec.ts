import { TestBed } from "@angular/core/testing";

import { AdmInterfaceSpecificationServices } from "./adm-interface-specification.service";

describe("AdmInterfaceSpecificationServices", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AdmInterfaceSpecificationServices = TestBed.get(AdmInterfaceSpecificationServices);
    expect(service).toBeTruthy();
  });
});
