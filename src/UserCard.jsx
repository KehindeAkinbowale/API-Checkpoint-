import ListGroup from 'react-bootstrap/ListGroup';

function ActiveExample({userId, id, name, username, email, phone, website, 
  addressStreet, addressCity, addressSuite, addressZipcode, geolat, geolng, companyName, companyCatchPhrase, companyBs   }) {
  return (
    <ListGroup as="ul" className='w-25'>
      <ListGroup.Item as="li" active className='lead'> User {userId}</ListGroup.Item>
      <ListGroup.Item as="li"><span className='fw-bold'>id  :</span>{id}</ListGroup.Item>
      <ListGroup.Item as="li" disabled> <span className='fw-bold'>name : </span>{name}</ListGroup.Item>
      <ListGroup.Item as="li"> <span className='fw-bold'>usename :</span>{username}</ListGroup.Item>
      <ListGroup.Item as="li"> <span className='fw-bold'>email : </span>{email}</ListGroup.Item>
      <ListGroup.Item as="li" disabled> <span className='fw-bold'>address :</span> {name}
       <ListGroup>
       <ListGroup.Item as="li"> <span className='fw-bold'>street:</span>{addressStreet}</ListGroup.Item>
      <ListGroup.Item as="li" disabled> <span className='fw-bold'>city : </span>{addressCity} </ListGroup.Item>
      <ListGroup.Item as="li"> <span className='fw-bold'>suite :</span> {addressSuite}</ListGroup.Item>
      <ListGroup.Item as="li" disabled> <span className='fw-bold'>zipcode :</span>{addressZipcode}</ListGroup.Item>
       </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item as="li" disabled><span className='fw-bold'>geo :</span>
       <ListGroup>
       <ListGroup.Item as="li"><span>lat</span>{geolat}</ListGroup.Item>
      <ListGroup.Item as="li" disabled><span>lng</span> {geolng} </ListGroup.Item>
       </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item as="li"><span className='fw-bold'>Phone :</span> {phone}</ListGroup.Item>
      <ListGroup.Item as="li" disabled><span className='fw-bold'>Website :</span> {website} </ListGroup.Item>
      <ListGroup.Item as="li" disabled> <span className='fw-bold'>Company :</span>
       <ListGroup>
       <ListGroup.Item as="li"> name : {companyName}</ListGroup.Item>
      <ListGroup.Item as="li" disabled>catch : {companyCatchPhrase} </ListGroup.Item>
      <ListGroup.Item as="li" disabled>bs : {companyBs} </ListGroup.Item>
       </ListGroup>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ActiveExample;