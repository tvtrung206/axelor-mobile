/*
 * Axelor Business Solutions
 *
 * Copyright (C) 2023 Axelor (<http://axelor.com>).
 *
 * This program is free software: you can redistribute it and/or  modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {ObjectFields, schemaContructor} from '@axelor/aos-mobile-core';

export const crm_modelAPI: ObjectFields = {
  crm_catalog: schemaContructor.object({
    name: schemaContructor.string(),
    pdfFile: schemaContructor.subObject('fileName'),
    description: schemaContructor.string(),
    catalogType: schemaContructor.subObject('name'),
  }),
  crm_client: schemaContructor.object({
    simpleFullName: schemaContructor.string(),
    name: schemaContructor.string(),
    fullName: schemaContructor.string(),
    partnerSeq: schemaContructor.string(),
    mainAddress: schemaContructor.subObject('fullName'),
    fixedPhone: schemaContructor.string(),
    mobilePhone: schemaContructor.string(),
    leadScoring: schemaContructor.number(),
    emailAddress: schemaContructor.subObject('fullName'),
    'emailAddress.address': schemaContructor.string(),
    user: schemaContructor.subObject('fullName'),
    industrySector: schemaContructor.subObject('name'),
    partnerCategory: schemaContructor.subObject('name'),
    description: schemaContructor.string(),
    webSite: schemaContructor.string(),
    contactPartnerSet: schemaContructor
      .array()
      .of(schemaContructor.subObject()),
    picture: schemaContructor.subObject('fileName'),
    salePartnerPriceList: schemaContructor.subObject('label'),
  }),
  crm_contact: schemaContructor.object({
    simpleFullName: schemaContructor.string(),
    name: schemaContructor.string(),
    firstName: schemaContructor.string(),
    partnerSeq: schemaContructor.string(),
    mainAddress: schemaContructor.subObject('fullName'),
    fixedPhone: schemaContructor.string(),
    mobilePhone: schemaContructor.string(),
    emailAddress: schemaContructor.subObject('fullName'),
    'emailAddress.address': schemaContructor.string(),
    mainPartner: schemaContructor.subObject('fullName'),
    picture: schemaContructor.subObject('fileName'),
    jobTitleFunction: schemaContructor.subObject('name'),
    description: schemaContructor.string(),
    webSite: schemaContructor.string(),
    language: schemaContructor.subObject('name'),
    titleSelect: schemaContructor.number(),
  }),
  crm_event: schemaContructor.object({
    startDateTime: schemaContructor.string(),
    endDateTime: schemaContructor.string(),
    statusSelect: schemaContructor.number(),
    typeSelect: schemaContructor.number(),
    subject: schemaContructor.string(),
    location: schemaContructor.string(),
    organizer: schemaContructor.subObject('name'),
    user: schemaContructor.subObject('fullName'),
    lead: schemaContructor.subObject(),
    partner: schemaContructor.subObject(),
    contactPartner: schemaContructor.subObject(),
    description: schemaContructor.string(),
  }),
  crm_lead: schemaContructor.object({
    name: schemaContructor.string(),
    enterpriseName: schemaContructor.string(),
    firstName: schemaContructor.string(),
    simpleFullName: schemaContructor.string(),
    leadStatus: schemaContructor.subObject('name'),
    primaryAddress: schemaContructor.string(),
    emailAddress: schemaContructor.subObject('fullName'),
    'emailAddress.address': schemaContructor.string(),
    mobilePhone: schemaContructor.string(),
    fixedPhone: schemaContructor.string(),
    webSite: schemaContructor.string(),
    user: schemaContructor.subObject('fullName'),
    isDoNotSendEmail: schemaContructor.boolean(),
    isDoNotCall: schemaContructor.boolean(),
    jobTitleFunction: schemaContructor.subObject('name'),
    description: schemaContructor.string(),
    type: schemaContructor.subObject('name'),
    industrySector: schemaContructor.subObject('name'),
    eventList: schemaContructor.array().of(schemaContructor.subObject()),
    leadScoringSelect: schemaContructor.number(),
    titleSelect: schemaContructor.number(),
  }),
  crm_leadStatus: schemaContructor.object({
    name: schemaContructor.string(),
  }),
  crm_opportunity: schemaContructor.object({
    'currency.symbol': schemaContructor.string(),
    description: schemaContructor.string(),
    expectedCloseDate: schemaContructor.string(),
    name: schemaContructor.string(),
    opportunitySeq: schemaContructor.string(),
    opportunityStatus: schemaContructor.subObject('name'),
    opportunityRating: schemaContructor.number(),
    partner: schemaContructor.subObject('partnerSeq'),
    amount: schemaContructor.number(),
    recurrentAmount: schemaContructor.number(),
    user: schemaContructor.subObject('fullName'),
  }),
  crm_opportunityStatus: schemaContructor.object({
    name: schemaContructor.string(),
  }),
  crm_partner: schemaContructor.object({
    simpleFullName: schemaContructor.string(),
    fullName: schemaContructor.string(),
    name: schemaContructor.string(),
    partnerSeq: schemaContructor.string(),
    mainAddress: schemaContructor.subObject('fullName'),
    fixedPhone: schemaContructor.string(),
    mobilePhone: schemaContructor.string(),
    emailAddress: schemaContructor.subObject('fullName'),
    'emailAddress.address': schemaContructor.string(),
    user: schemaContructor.subObject('fullName'),
    industrySector: schemaContructor.subObject('name'),
    partnerCategory: schemaContructor.subObject('name'),
    description: schemaContructor.string(),
    webSite: schemaContructor.string(),
    picture: schemaContructor.subObject('fileName'),
    isCustomer: schemaContructor.boolean(),
    isProspect: schemaContructor.boolean(),
    salePartnerPriceList: schemaContructor.subObject('label'),
    contactPartnerSet: schemaContructor
      .array()
      .of(schemaContructor.subObject()),
  }),
  crm_prospect: schemaContructor.object({
    simpleFullName: schemaContructor.string(),
    name: schemaContructor.string(),
    partnerSeq: schemaContructor.string(),
    mainAddress: schemaContructor.subObject('fullName'),
    fixedPhone: schemaContructor.string(),
    mobilePhone: schemaContructor.string(),
    emailAddress: schemaContructor.subObject('fullName'),
    'emailAddress.address': schemaContructor.string(),
    user: schemaContructor.subObject('fullName'),
    industrySector: schemaContructor.subObject('name'),
    partnerCategory: schemaContructor.subObject('name'),
    description: schemaContructor.string(),
    webSite: schemaContructor.string(),
    picture: schemaContructor.subObject('fileName'),
    contactPartnerSet: schemaContructor
      .array()
      .of(schemaContructor.subObject()),
    leadScoringSelect: schemaContructor.number(),
  }),
};
