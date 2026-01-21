import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../data/services';
import ServiceDetailLayout from '../components/services/sericeDetailLayout';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  return <ServiceDetailLayout service={service} />;
};

export default ServiceDetail;