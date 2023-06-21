import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'Water Recharge',
        projectDesc: 'Empowering users to offset their water usage through blockchain-certified credits."',
        projectType: 'React, TypeScript, Node, GraphQl, Nexus',
        roles: ['WEB APP'],
      },
      {
        number: '02',
        projectName: 'Cast',
        projectDesc: 'Transform any screen into a digital canvas for showcasing and casting NFTs effortlessly.',
        projectType: 'NEXT.JS, JavaScript, Firebase, AWS',
        roles: ['WEB APP'],
      },
      {
        number: '03',
        projectName: 'UNIFYD',
        projectDesc: 'A genuine social media platform fostering meaningful connections, promoting positivity, and nurturing a sense of community.',
        projectType: 'React, Tailwind CSS, TypeScript, Python, Django',
        roles: ['SOCIAL APP'],
      },
      {
        number: '04',
        projectName: 'Aimsplus',
        projectDesc: 'Accelerating business impact with agile Warehouse Management (WMS) and Supply Chain Logistics solutions for enhanced efficiency and optimized inventory management.',
        projectType: 'React, TypeScript, Material UI, Pyhton, Django',
        roles: ['Warehourse Management System'],
      },
      {
        number: '05',
        projectName: 'Parlor At Home',
        projectDesc: 'On-demand doorstep parlor services with easy booking, order tracking, and coupon options for a seamless customer experience.',
        projectType: 'React, React Native, Node, MongoDB, Express',
        roles: ['Mobile App and Web App'],
      },
      {
        number: '06',
        projectName: 'Calendy',
        projectDesc: 'Consolidate and share all your calendar events from multiple sources in a single, easily accessible page.',
        projectType: 'NEXT JS, NEST JS, TypeScript, MongoDB',
        roles: ['Web App'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
